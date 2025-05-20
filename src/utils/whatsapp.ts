
/**
 * Opens WhatsApp with a predefined message
 * @param message Optional custom message to send
 */
export const openWhatsApp = (message: string = 'Olá! Gostaria de saber mais sobre os serviços da Floricultura Laços de Amor.') => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=558001813000&text=${encodedMessage}&type=phone_number&app_absent=0`;
  window.open(whatsappUrl, '_blank');
};
