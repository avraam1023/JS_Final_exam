export function cartSlider(slider) {
  const slides = Array.from(slider.querySelectorAll(".slide"));
  const prevBtn = slider.parentElement.querySelector(".prev-slide");
  const nextBtn = slider.parentElement.querySelector(".next-slide");
  let currentIndex = 0;

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }
}
