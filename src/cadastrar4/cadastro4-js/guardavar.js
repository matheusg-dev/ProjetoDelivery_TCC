
let btn = document.querySelector("#send");
let formulario = new Map();

btn.addEventListener("click", function(e){

    e.preventDefault();

    const nome = document.querySelector("#PrimeiroNome");
    formulario.set("Nome", nome.value);

    const email = document.querySelector("#email");
    formulario.set("Email",  email.value);


    const senha = document.querySelector("#senha");
    formulario.set("Senha", senha.value);


    const repetirSenha = document.querySelector("#repetirSenha");
    formulario.set("RepetirSenha", repetirSenha.value);
    

    const cpf = document.querySelector("#cpf");
    formulario.set("Cpf", cpf.value);


    const telefone = document.querySelector("#telefone");
    formulario.set("Telefone", telefone.value);
  

    const cep = document.querySelector("#cep");
    formulario.set("Cep", cep.value);
  

    const endereco = document.querySelector("#endereco");
    formulario.set("Endereco", endereco.value);


    const numero = document.querySelector("#número");
    formulario.set("Numero", numero.value);


    const bairro = document.querySelector("#bairro");
    formulario.set("Bairro", bairro.value);

    var user = {
        UsuarioId: 0,
        UsuarioPrimeiroSome: nome.value,
        UsuarioEmail: email.value,
        UsuarioSenha: senha.value,
        UsuarioRepetirSenha: repetirSenha.value,
        UsuarioCpf: cpf.value,
        UsuarioTelefoneWhatsapp: telefone.value,
        UsuarioCep:cep.value,
        UsuarioEndereco: endereco.value,
        UsuarioNumeroCasa: numero.value,
        UsuarioBairro: bairro.value
    }

    function post(endpoint, body)
{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return fetch("https://localhost:7180/" + endpoint, { 
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: body
    })
    .then(response => response.json())
}

    var dadosCadastrais = JSON.stringify(user)

    
    post("Usuario/cadastrar4", dadosCadastrais)
        .then(response => console.log(response))

});

