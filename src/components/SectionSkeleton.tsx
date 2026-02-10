const shimmerClass = "animate-pulse bg-muted rounded-lg";

export const GallerySkeleton = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 space-y-4">
        <div className={`${shimmerClass} h-10 w-64 mx-auto`} />
        <div className={`${shimmerClass} h-5 w-96 max-w-full mx-auto`} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg bg-background shadow-md overflow-hidden">
            <div className={`${shimmerClass} h-64 w-full rounded-none`} />
            <div className="p-3">
              <div className={`${shimmerClass} h-10 w-full`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TestimonialsSkeleton = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 space-y-4">
        <div className={`${shimmerClass} h-10 w-56 mx-auto`} />
        <div className={`${shimmerClass} h-5 w-80 max-w-full mx-auto`} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className={`${shimmerClass} h-40 w-full`} />
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12 space-y-4">
        <div className={`${shimmerClass} h-10 w-48 mx-auto`} />
        <div className={`${shimmerClass} h-5 w-72 max-w-full mx-auto`} />
      </div>
      <div className={`${shimmerClass} h-64 max-w-xl mx-auto`} />
    </div>
  </section>
);
