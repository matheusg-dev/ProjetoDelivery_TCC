
btnImg.forEach((mostraValor) => {
    mostraValor.onclick = function (evento) {
        mostraValor.outerHTML

        console.log(mostraValor.outerHTML)
        console.log(mostraValor.alt)
        console.log(mostraValor.parentElement.children[3].innerText)
        

    }
})