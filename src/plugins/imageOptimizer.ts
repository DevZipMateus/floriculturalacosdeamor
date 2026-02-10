import type { Plugin } from 'vite';
import path from 'path';
import fs from 'fs';

async function processImages(dir: string) {
  const sharp = (await import('sharp')).default;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processImages(fullPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    try {
      const buffer = fs.readFileSync(fullPath);
      let pipeline = sharp(buffer).resize({ width: 800, withoutEnlargement: true });

      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 70, palette: true });
      } else {
        pipeline = pipeline.jpeg({ quality: 70, mozjpeg: true });
      }

      const optimized = await pipeline.toBuffer();
      fs.writeFileSync(fullPath, optimized);
      const saved = ((buffer.length - optimized.length) / buffer.length * 100).toFixed(1);
      console.log(`[image-optimizer] ${path.relative(dir, fullPath)} — ${(buffer.length / 1024).toFixed(0)} KiB → ${(optimized.length / 1024).toFixed(0)} KiB (−${saved}%)`);
    } catch (e) {
      console.warn(`[image-optimizer] Skipped ${fullPath}:`, e);
    }
  }
}

export function imageOptimizer(): Plugin {
  let outDir = 'dist';

  return {
    name: 'vite-plugin-image-optimizer-public',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    async closeBundle() {
      const absOut = path.resolve(outDir);
      if (!fs.existsSync(absOut)) return;
      console.log('[image-optimizer] Optimizing images in', absOut);
      await processImages(absOut);
      console.log('[image-optimizer] Done.');
    },
  };
}
