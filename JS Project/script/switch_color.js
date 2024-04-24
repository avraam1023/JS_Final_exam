const modeSwitch = document.getElementById("modeSwitch");
const header = document.querySelector("header");

modeSwitch.addEventListener("change", () => {
  const cardContainers = document.querySelectorAll(".card");
  if (modeSwitch.checked) {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";
    header.style.color = "#fff";
    cardContainers.forEach((container) => {
      container.style.backgroundColor = "#222";
    });
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    header.style.color = "#fff";
    cardContainers.forEach((container) => {
      container.style.backgroundColor = "#fff";
    });
  }
});
