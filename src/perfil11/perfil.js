
window.onload = function(){
    const btnSair = document.querySelector("[data-sair]");
    const nome = document.querySelector(".label__nome");
    const email = document.querySelector(".label__email");
    const senha = document.querySelector(".label__senha");
    const repetirSenha = document.querySelector(".label__repetirsenha");
    const cpf = document.querySelector(".label__cpf");
    const telefone = document.querySelector(".label__telefone");
    const cep = document.querySelector(".label__cep");
    const endereco = document.querySelector(".label__endereco");
    const numero = document.querySelector(".label__numero");
    const bairro = document.querySelector(".label__bairro");

    
    var dadosObjetoUsuario = window.localStorage.getItem("dadosObjetoUsuario")
    let arrStorageObjeto = JSON.parse(dadosObjetoUsuario)

    let primeiroNome = arrStorageObjeto[0].primeiroNome
    let pemail = arrStorageObjeto[0].email
    let pcpf = arrStorageObjeto[0].cpf
    let ptelefoneWhats = arrStorageObjeto[0].telefoneWhats
    let pcep = arrStorageObjeto[0].cep
    let pendereco = arrStorageObjeto[0].endereco
    let pnumero = arrStorageObjeto[0].numero
    let pbairro = arrStorageObjeto[0].bairro

    let pNome = document.createElement("p")
    pNome.innerHTML = primeiroNome
    nome.appendChild(pNome)

    let cemail = document.createElement("p")
    cemail.innerHTML = pemail
    email.appendChild(cemail)

    let criaCpf = document.createElement("p")
    criaCpf.innerHTML =  pcpf
    cpf.appendChild(criaCpf)

    let criaTel = document.createElement("p")
    criaTel.innerHTML = ptelefoneWhats
    telefone.appendChild(criaTel)

    let criaCep = document.createElement("p")
    criaCep.innerHTML = pcep
    cep.appendChild(criaCep)

    let criaEndereco = document.createElement("p")
    criaEndereco.innerHTML = pendereco
    endereco.appendChild(criaEndereco)

    let criaNum = document.createElement("p")
    criaNum.innerHTML = pnumero
    numero.appendChild(criaNum)

    let criaBairro = document.createElement("p")
    criaBairro.innerHTML = pbairro
    bairro.appendChild(criaBairro)
    
    
    btnSair.onclick = function () {
        window.location.assign("/src/authentic3/authentic3.html")
    }
}
