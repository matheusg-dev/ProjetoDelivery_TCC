window.onload = function() {
    const containerCarrinho = document.querySelector("[data-carrinho]")
    const nomePrato = document.querySelector(".salada")
    
    var usuarioAtivo = window.localStorage.getItem("usuarioAtivo")
    let arrStorageObjeto = JSON.parse(usuarioAtivo)

    let nomeImgLogin = arrStorageObjeto[1].nomeImgLogin

    nomePrato.innerHTML = nomeImgLogin

}

