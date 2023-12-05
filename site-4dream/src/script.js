const btnMenuToggle = document.querySelector(".toggle-menu");
const btnToggleDark = document.querySelector(".toggle-dark");
const openMenu = document.querySelector(".open-menu");
const navLinks = document.querySelectorAll(".nav-links");
const formMsg = document.querySelector("#formMsg");
const popupModal = document.querySelector("#popup-modal");

btnToggleDark.addEventListener("click", (event) => {
  event.preventDefault();
  document.documentElement.classList.toggle("dark");
});

btnMenuToggle.addEventListener("click", () => {
  if (btnMenuToggle.name === "menu") {
    btnMenuToggle.name = "close";
    openMenu.classList.remove("hidden");
    openMenu.classList.add("opacity-100");
    openMenu.classList.remove("opacity-0");
    btnToggleDark.classList.add("hidden");
  } else {
    btnMenuToggle.name = "menu";
    openMenu.classList.add("opacity-0");
    openMenu.classList.remove("opacity-100");
    btnToggleDark.classList.remove("hidden");
    setTimeout(() => {
      openMenu.classList.add("hidden");
    }, 300);
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    btnMenuToggle.name = "menu";
    openMenu.classList.add("opacity-0");
    openMenu.classList.remove("opacity-100");
    btnToggleDark.classList.remove("hidden");
    setTimeout(() => {
      openMenu.classList.add("hidden");
    }, 300);
  });
});

function submitForm(event) {
  event.preventDefault();
  formMsg.reset();
}
formMsg.addEventListener("submit", submitForm);
