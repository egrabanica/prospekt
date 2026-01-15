// Lazy Load Image Component for better performance
export const loadImageLazy = (imagePath, callback) => {
  if (!imagePath) return;
  
  const img = new Image();
  img.onload = () => {
    callback(imagePath);
  };
  img.onerror = () => {
    callback(null);
  };
  img.src = imagePath;
};

// Intersection Observer for lazy loading images
export const observeImages = () => {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-lazy]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-lazy');
            observer.unobserve(img);
          }
        }
      });
    });
    
    images.forEach(img => observer.observe(img));
  }
};

export default {
  loadImageLazy,
  observeImages
};
