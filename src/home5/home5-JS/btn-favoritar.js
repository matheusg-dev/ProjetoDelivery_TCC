const btnCoracao = document.querySelectorAll(".prato__coracao")
const containerFavoritos = document.querySelector("[data-favorito]")


btnCoracao.forEach((elemento) => {
    elemento.onclick = function (event) {
        if (this.classList.contains("vazio")) {
            let verifica = event.target.src = "../../assets/img/coracao-red.svg";
            this.classList.replace("vazio", "favorito")


           prato.forEach((addClass) => {
            
            addClass.onclick = function ()
            addClass.classList.add("CoracaoCheio")

         
            }) 

 

              
           
           
            /* prato.forEach((pratoFavorito) => {
                const clone = pratoFavorito.cloneNode(true)
                containerFavoritos.appendChild(clone)

                console.log(pratoFavorito)
            }) */ 

            
                        
        } else {
            this.classList.replace("favorito", "vazio")
            let verifica = event.target.src = "../../assets/img/coracao.svg";
        }
    }
})

