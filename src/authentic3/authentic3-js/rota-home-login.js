const btnLogin = document.querySelector("[data-btnLogin]")
const emailLogin = document.querySelector("[data-emailLogin]")
const senhaLogin = document.querySelector("[data-senhaLogin]")


btnLogin.onclick = (e) =>{

    e.preventDefault();

    var arrStorage = window.localStorage.getItem("dadosObjetoUsuario")
    
    let confereEmail = arrStorage.includes(emailLogin.value)
    let confereSenha = arrStorage.includes(senhaLogin.value)
    

    if(emailLogin.value == "souVisitante@visitante.com"){
        window.location.assign("/src/home5/home5.html") 
    }else if (emailLogin.value == ""){
        alert("Usuário e/ou senha inválidos")
    }else if (senhaLogin.value == ""){
        alert("Usuário e/ou senha inválidos")
    }else if(confereEmail && confereSenha == true){
        window.location.assign("/src/home5/home5.html")
    }else {
        alert("Usuário e/ou senha inválidos")
    }
}