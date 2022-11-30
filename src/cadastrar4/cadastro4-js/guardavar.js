/*const nome =  document.querySelector(".input")
const ex =  document.querySelector(".label")

console.dir(nome)

console.log(nome.value)*/

const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();

    const nome = document.querySelector("#PrimeiroNome");

    var PrimeiroNome = ""
    
    console.log(PrimeiroNome);

    PrimeiroNome = nome.value;

    console.log(PrimeiroNome);

});

console.log(PrimeiroNome.value);

const btn2 = document.querySelector("#send");

btn2.addEventListener("click", function(e){

    e.preventDefault();

    const email = document.querySelector("#email");

    let value = email.value;

    

});

const btn3 = document.querySelector("#send");

btn3.addEventListener("click", function(e){

    e.preventDefault();

    const senha = document.querySelector("#senha");

    let value = senha.value;

    

});

const btn4 = document.querySelector("#send");

btn4.addEventListener("click", function(e){

    e.preventDefault();

    const repetirSenha = document.querySelector("#repetirSenha");

    let value = repetirSenha.value;

    

});

const btn5 = document.querySelector("#send");

btn5.addEventListener("click", function(e){

    e.preventDefault();

    const cpf = document.querySelector("#cpf");

    let value = cpf.value;

    

});


const btn6 = document.querySelector("#send");

btn6.addEventListener("click", function(e){

    e.preventDefault();

    const telefone = document.querySelector("#telefone");

    let value = telefone.value;

    

});

const btn7 = document.querySelector("#send");

btn7.addEventListener("click", function(e){

    e.preventDefault();

    const cep = document.querySelector("#cep");

    let value = cep.value;

    

});

const btn8 = document.querySelector("#send");

btn8.addEventListener("click", function(e){

    e.preventDefault();

    const endereco = document.querySelector("#endereco");

    let value = endereco.value;

    

});

const btn9 = document.querySelector("#send");

btn9.addEventListener("click", function(e){

    e.preventDefault();

    const numero = document.querySelector("#número");

    let value = numero.value;

    

});

const btn10 = document.querySelector("#send");

btn10.addEventListener("click", function(e){

    e.preventDefault();

    const bairro = document.querySelector("#bairro");

    let value = bairro.value;

    

});

