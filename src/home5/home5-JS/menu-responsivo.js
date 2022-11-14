const btnMenu = document.querySelector(".btn__menu");
const dataMenu = document.querySelector("[data-menu]");

function mudouTamanho() {
  if (window.innerWidth >= 540) {
    dataMenu.classList.add("block");
  }

  if (window.innerWidth < 540) {
    dataMenu.classList.replace("block", "none__btn-menu");
  }
}

btnMenu.addEventListener("click", () => {
  if (dataMenu.classList.contains("none__textos-menu")) {
    console.log("true");
    dataMenu.classList.remove("none__textos-menu");
  } else {
    dataMenu.classList.add("none");
    dataMenu.classList.replace("none", "n");
  }
});
