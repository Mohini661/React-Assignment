document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      lightbox.style.display = "block";
      // Set the lightbox image source to the clicked image's source
      lightboxImg.src = this.src;
    });
  });
  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function () {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
