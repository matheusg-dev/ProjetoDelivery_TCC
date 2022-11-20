const btnMenu = document.querySelector(".btn__menu");
const dataMenu = document.querySelector("[data-menu]");
const filtroApi = document.querySelector("[data-filtro]");

function mudouTamanho() {
  if (window.innerWidth >= 553) {
    dataMenu.classList.add("textos__menu");
  }

  if (window.innerWidth < 553) {
    dataMenu.classList.replace("absolut__menu", "textos__menu");
    filtroApi.classList.remove("z-index");
  }
}

btnMenu.addEventListener("click", () => {
  if (dataMenu.classList.contains("textos__menu")) {
    dataMenu.classList.replace("textos__menu", "absolut__menu");
    filtroApi.classList.add("z-index");
  } else {
    dataMenu.classList.replace("absolut__menu", "textos__menu");
    filtroApi.classList.remove("z-index");
  }
});
