const btnCoracao = document.querySelectorAll(".prato__coracao")

btnCoracao.forEach((elemento) => {
    elemento.onclick = function (event) {
        this.classList.add("favorito")
    }
})