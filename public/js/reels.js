document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".video-thumbnail");
  const iframe = document.querySelector("#main-video iframe");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const videoSrc = thumbnail.getAttribute("data-video");
      iframe.src = `${videoSrc}?autoplay=1&controls=1`;
    });
  });
});
