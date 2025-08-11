
/**
 * Opens WhatsApp with a predefined message
 * @param message Optional custom message to send
 * @param imageUrl Optional image URL to include in the message
 */
export const openWhatsApp = (message: string = 'Olá! Gostaria de saber mais sobre os serviços da Floricultura Laços de Amor.', imageUrl?: string) => {
  let finalMessage = message;

  if (imageUrl) {
    const isAbsolute = /^https?:\/\//i.test(imageUrl);
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    // Normalize relative paths to absolute URLs
    const absoluteUrl = isAbsolute ? imageUrl : `${origin}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
    finalMessage = `${message} ${absoluteUrl}`;
  }

  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=558001813000&text=${encodedMessage}&type=phone_number&app_absent=0`;
  window.open(whatsappUrl, '_blank');
};
