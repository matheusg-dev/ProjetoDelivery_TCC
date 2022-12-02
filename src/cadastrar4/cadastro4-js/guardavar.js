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
    

    var form = {
        Nome: nome,
        Email: email,
        Senha: senha,
        RepetirSenha: repetirSenha,
        Cpf: cpf,
        Telefone: telefone,
        Cep:cep,
        Endereco: endereco,
        Numero: numero,
        Bairro: bairro
    }
    imprimeDados();


});

function imprimeDados() {
for (var [key, value] of formulario) {

    console.log(key + " = " + value);
}}