
window.onload = function() {
    const nomeBemVindo = document.querySelector("[data-bemVindo]")
    
    var arrStorage = window.localStorage.getItem("dadosObjetoUsuario")
    let arrStorageObjeto = JSON.parse(arrStorage)

    nomeBemVindo.innerHTML = arrStorageObjeto[0].primeiroNome 
}