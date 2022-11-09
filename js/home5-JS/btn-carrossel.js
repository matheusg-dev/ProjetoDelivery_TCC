const btn = document.querySelectorAll(".btn");
const itemCarrossel = document.querySelectorAll(".item-carrossel");

let maxItemCarrossel = itemCarrossel.length;
let itemCarrosselAtual = 0;

btn.forEach((controle) => {
  controle.addEventListener("click", () => {
    const btnEsquerdo = controle.classList.contains("btn__esquerda");

    if (btnEsquerdo) {
      itemCarrosselAtual -= 3;
    } else {
      itemCarrosselAtual += 3;
    }

    if (itemCarrosselAtual >= maxItemCarrossel) {
      itemCarrosselAtual = 0;
    }

    if (itemCarrosselAtual < 0) {
      itemCarrosselAtual = maxItemCarrossel - 1;
    }

    itemCarrossel[itemCarrosselAtual].scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest",
    });
  });
});
