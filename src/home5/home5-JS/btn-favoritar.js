const btnCoracao = document.querySelectorAll(".prato__coracao")
const  

btnCoracao.forEach((elemento) => {
    elemento.onclick = function (event) {
        if (this.classList.contains("vazio")) {
            let verifica = event.target.src = "../../assets/img/coracao-red.svg";
            this.classList.replace("vazio", "favorito")

                        
        } else {
            this.classList.replace("favorito", "vazio")
            let verifica = event.target.src = "../../assets/img/coracao.svg";
        }
    }
})

