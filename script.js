const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Toggle menu visibility on burger click
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
