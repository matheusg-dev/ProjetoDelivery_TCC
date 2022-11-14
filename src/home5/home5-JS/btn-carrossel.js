const btnRecomendado = document.querySelectorAll("[data-btnRecomendado]");
const combinado = document.querySelectorAll(".combinado");

let combinadoCarrossel = combinado[0].children;
let maxCombinado = combinadoCarrossel.length;

let itemCarrosselAtual = 0;

btnRecomendado.forEach((elementos) => {
  elementos.addEventListener("click", () => {
    const btnEsquerdo = elementos.classList.contains("btn__esquerda");

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
