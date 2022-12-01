const btn = document.querySelector("#send");
var formulario = new Map();
formulario.set("Var", "novivip");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const nome = document.querySelector("#PrimeiroNome");

    formulario.set("Nome", nome.value);

    const email = document.querySelector("#email");

    formulario.set("Email",  email.value);


    const senha = document.querySelector("#senha");

    var senhaContent = senha.value;


    const repetirSenha = document.querySelector("#repetirSenha");

    var repetirSenhaContent = repetirSenha.value;

    

    const cpf = document.querySelector("#cpf");

    var cpfContent = cpf.value;



    const telefone = document.querySelector("#telefone");

    var telefoneContent = telefone.value;

  

    const cep = document.querySelector("#cep");

    var cepContent = cep.value;

  

    const endereco = document.querySelector("#endereco");

    var enderecoContent = endereco.value;


    const numero = document.querySelector("#número");

    var numeroContent = numero.value;

    

    const bairro = document.querySelector("#bairro");

    var bairroContent = bairro.value;

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