const btnCoracao = document.querySelectorAll(".prato__coracao");
const containerFavoritos = document.querySelector("[data-favorito]");

btnCoracao.forEach((elemento) => {
  elemento.onclick = function (event) {
    if (this.classList.contains("vazio")) {
      let verifica = (event.target.src = "../../assets/img/coracao-red.svg");
      this.classList.replace("vazio", "favorito");

      const pratofavorito = document.querySelector(".favorito");

      let clone = pratofavorito.parentElement.cloneNode(true);
      clone.classList.add("removeCoracao");
      containerFavoritos.appendChild(clone);
    } else {
      this.classList.replace("favorito", "vazio");
      let verifica = (event.target.src = "../../assets/img/coracao.svg");

      const removeCoracao = document.querySelector(".removeCoracao");

      removeCoracao.remove();
    }
  };
});
