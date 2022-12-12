const valorTodos = document.querySelectorAll("[data-contador]")
const valorPrato = document.querySelectorAll(".between")
const btnImg = document.querySelectorAll(".prato__img")

valorTodos.forEach((valorInicio) =>{
    valorInicio.innerHTML = "10,00"
}) 

valorPrato.forEach((alteraValor) => {
    alteraValor.onclick = function (elmentoValor) {

        let valor = parseInt(alteraValor.children[0].textContent)
        alterado = valor + 10 + ",00"
        alteraValor.children[0].textContent = alterado
            
        btnImg.forEach((rotaAtiva) => {
            rotaAtiva.onclick = function () {
                let naoAlterado = rotaAtiva.parentElement.childNodes[7].innerText
                    
                let imgLogin = rotaAtiva.outerHTML
                let nomeImgLogin = rotaAtiva.alt
                let valorImgLogin = rotaAtiva.parentElement.children[3].innerText
                
                let usuarioAtivo = new Array()
    
                if(localStorage.hasOwnProperty("usuarioAtivo")){
                    usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"))
                }

                usuarioAtivo.push({
                    imgLogin,
                    nomeImgLogin,
                    valorImgLogin,
                });
                
                localStorage.setItem("usuarioAtivo", JSON.stringify(usuarioAtivo))
                console.log("foi")

                if (naoAlterado === alterado) {   
                    
                  window.location.assign("/src/orderListA6/orderListA6.html")
                }
            }
        })
    }
})
