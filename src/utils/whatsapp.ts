
/**
 * Creates a masked URL for images to hide the galeria folder
 * @param imageName The image filename
 * @returns A masked URL path
 */
const createMaskedImageUrl = (imageName: string): string => {
  // Remove file extension and create a more friendly URL
  const nameWithoutExt = imageName.replace(/\.(jpeg|jpg|png|gif|webp)$/i, '');
  return `https://floriculturalacosdeamor.com.br/galeria/produto-${nameWithoutExt}`;
};

/**
 * Opens WhatsApp with a predefined message
 * @param message Optional custom message to send
 * @param imageUrl Optional image URL to include in the message
 */
export const openWhatsApp = (message: string = 'Olá! Gostaria de saber mais sobre os serviços da Floricultura Laços de Amor.', imageUrl?: string) => {
  let finalMessage = message;
  
  if (imageUrl) {
    // Extract image name from the full URL to create a masked version
    const imageName = imageUrl.split('/').pop() || '';
    const maskedUrl = createMaskedImageUrl(imageName);
    finalMessage = `${message} ${maskedUrl}`;
  }
  
  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=558001813000&text=${encodedMessage}&type=phone_number&app_absent=0`;
  window.open(whatsappUrl, '_blank');
};
