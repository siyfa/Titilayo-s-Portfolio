const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btn = document.getElementById("goBack");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-dropdown");
  navToggle.classList.toggle("active");
});

btn.addEventListener("click", () => {
  window.history.back();
})