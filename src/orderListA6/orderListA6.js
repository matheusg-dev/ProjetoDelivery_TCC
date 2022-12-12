window.onload = function() {
    const containerCarrinho = document.querySelector("[data-img]")
    const cifraoPrato = document.querySelector(".cifrao")
    const nomePrato = document.querySelector(".salada")
    const btnSoma = document.querySelector(".logo__adicao")
    const btnSubtracao = document.querySelector(".logo__subtracao")
    const textoTotal = document.querySelector("[data-total]")

    
    var usuarioAtivo = window.localStorage.getItem("usuarioAtivo")
    let arrStorageObjeto = JSON.parse(usuarioAtivo)

    

    let criaimg = document.createElement("capture")
    criaimg.innerHTML = arrStorageObjeto[0].imgLogin
    containerCarrinho.appendChild(criaimg)
    
    

    let nomeImgLogin = arrStorageObjeto[0].nomeImgLogin
    nomePrato.innerHTML = nomeImgLogin

    cifraoPrato.innerHTML = arrStorageObjeto[0].valorImgLogin

    textoTotal.innerHTML = cifraoPrato.innerHTML

    btnSoma.onclick = function () {
        let valor = parseInt(cifraoPrato.textContent)
        let alterado = valor + 10 + ",00"
        let resulTotal = cifraoPrato.textContent = alterado
        textoTotal.textContent = resulTotal
    }

    btnSubtracao.onclick = function (){
        let valor = parseInt(cifraoPrato.textContent)
        let alterado = valor - 10 + ",00"
        let resulTotal = cifraoPrato.textContent = alterado
        textoTotal.textContent = resulTotal
    }




}
