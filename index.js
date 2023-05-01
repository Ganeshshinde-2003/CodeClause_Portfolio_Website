const barIcon = document.querySelector(".bar-icon");
const navItems = document.querySelector(".nav-items");

barIcon.addEventListener("click", function () {
  navItems.classList.toggle("active");
});
