document.addEventListener("DOMContentLoaded", () => {
  // Disable right-click on all images
  document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("contextmenu", (e) => {
          e.preventDefault();
      });
  });

  // Disable right-click on all elements with the class 'photo-thumbnail'
  document.querySelectorAll(".photo-thumbnail").forEach((thumbnail) => {
      thumbnail.addEventListener("contextmenu", (e) => {
          e.preventDefault();
      });
  });

    // Disable right-click on all elements with the class 'photo-thumbnail'
    document.querySelectorAll(".video-thumbnail").forEach((thumbnail) => {
      thumbnail.addEventListener("contextmenu", (e) => {
          e.preventDefault();
      });
  });

  // Disable right-click on the entire slideshow container
  const slideshowContainer = document.querySelector(".slideshow-container");
  if (slideshowContainer) {
      slideshowContainer.addEventListener("contextmenu", (e) => {
          e.preventDefault();
      });
  }

  // Disable right-click on the entire document to catch any other cases
  document.addEventListener("contextmenu", (e) => {
      if (e.target.tagName === "IMG" || e.target.classList.contains("photo-thumbnail")) {
          e.preventDefault();
      }
  });
});
