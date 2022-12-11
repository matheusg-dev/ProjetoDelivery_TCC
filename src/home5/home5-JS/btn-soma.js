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
                    
                if (naoAlterado === alterado) {        
                    window.location.assign("/src/orderListA6/orderListA6.html")
                }
            }
        })
    }
})
