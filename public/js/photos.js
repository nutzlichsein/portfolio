document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript code is running!");
    const thumbnails = document.querySelectorAll(".photo-thumbnail");
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        const photoSrc = thumbnail.getAttribute("data-photo");
        console.log(`Photo clicked: ${photoSrc}`);
      });
    });
  });