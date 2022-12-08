const btnRecomendado = document.querySelectorAll("[data-btnRecomendado]");
const btnPopular = document.querySelectorAll("[data-btnPopular]");
const btnFavorito = document.querySelectorAll("[data-btnFavorito]");

const combinado = document.querySelectorAll(".combinado");

let combinadoCarrossel = combinado[0].children;
let popularCarrossel = combinado[1].children;




let maxCombinado = combinadoCarrossel.length;
let maxCombinadoPopular = popularCarrossel.length;


let itemCarrosselAtual = 0;

btnRecomendado.forEach((elementos) => {
  elementos.addEventListener("click", () => {
    const btnEsquerdo = elementos.classList.contains("btn__direita");

    if (btnEsquerdo) {
      itemCarrosselAtual -= 3;
    } else {
      itemCarrosselAtual += 3;
    }

    if (itemCarrosselAtual >= maxCombinado) {
      itemCarrosselAtual = 0;
    }

    if (itemCarrosselAtual < 0) {
      itemCarrosselAtual = maxCombinado - 1;
    }

    combinadoCarrossel[itemCarrosselAtual].scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest",
    });
  });
});

btnPopular.forEach((elementos) => {
  elementos.addEventListener("click", () => {
    const btnEsquerdo = elementos.classList.contains("btn__direita");

    if (btnEsquerdo) {
      itemCarrosselAtual -= 3;
    } else {
      itemCarrosselAtual += 3;
    }

    if (itemCarrosselAtual >= maxCombinadoPopular) {
      itemCarrosselAtual = 0;
    }

    if (itemCarrosselAtual < 0) {
      itemCarrosselAtual = maxCombinadoPopular - 1;
    }

    popularCarrossel[itemCarrosselAtual].scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest",
    });
  });
});



