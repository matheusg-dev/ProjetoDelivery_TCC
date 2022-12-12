const btnLogin = document.querySelector("[data-btnLogin]")
const emailLogin = document.querySelector("[data-emailLogin]")
const senhaLogin = document.querySelector("[data-senhaLogin]")


btnLogin.onclick = (e) =>{

    e.preventDefault();

    if(emailLogin.value == "souVisitante@visitante.com"){
        window.location.assign("/src/home5/home5.html") 
    }
    
    var arrStorage = window.localStorage.getItem("dadosObjetoUsuario")
    
    
    let confereEmail = arrStorage.includes(emailLogin.value)
    let confereSenha = arrStorage.includes(senhaLogin.value)
    
    if (emailLogin.value == ""){
        alert("Usuário e/ou senha inválidos")
    }else if (senhaLogin.value == ""){
        alert("Usuário e/ou senha inválidos")
    }else if(confereEmail && confereSenha == true){
        
        let emailLoginAtivo = emailLogin.value
        
        let usuarioAtivo = new Array()
        
        if(localStorage.hasOwnProperty("usuarioAtivo")){
            usuarioAtivo = JSON.parse(localStorage.getItem("usuarioAtivo"))
        }
        
        usuarioAtivo.push({
            emailLoginAtivo,
        })
        
        localStorage.setItem("usuarioAtivo", JSON.stringify(usuarioAtivo))
        
<<<<<<< HEAD
        window.location.assign("/src/home5/home5.html") 
=======
       window.location.assign("/src/home5/home5.html")
>>>>>>> 44d4463f018baedf153ec384ac0a8efee2f5334b
    }else {
        alert("Usuário e/ou senha inválidos")
    }
}