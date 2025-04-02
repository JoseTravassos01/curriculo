// Somente pausa o carrossel ao passar o mouse
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const carousel = document.querySelector(".carousel");
  
    if (carousel && track) {
      carousel.addEventListener("mouseover", () => {
        track.style.animationPlayState = "paused";
      });
  
      carousel.addEventListener("mouseout", () => {
        track.style.animationPlayState = "running";
      });
    }
  });
  