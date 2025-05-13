
/**
 * Opens WhatsApp with a predefined message
 * @param message Optional custom message to send
 */
export const openWhatsApp = (message: string = 'Olá! Gostaria de saber mais sobre os serviços da Floricultura Laços de Amor.') => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/5562981464070?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
