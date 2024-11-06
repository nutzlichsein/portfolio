document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("lightgallery");
  
    lightGallery(gallery, {
      plugins: [lgZoom, lgThumbnail],
      selector: '.gallery-item',
      zoom: true,
      thumbnail: true,
      mode: 'lg-slide',
      appendSubHtmlTo: '.lg-item', // Ensures captions are appended to the gallery item
      subHtmlSelectorRelative: true, // Ensures data-caption is used for captions
      download: false,
    });
  });
  