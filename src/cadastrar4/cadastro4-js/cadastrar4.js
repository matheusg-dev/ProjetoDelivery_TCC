const form = document.getElementsByClassName('form');
const campos = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.span-required');
const emailRegex =  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length <3)
    {
        setError(0);
    }
    else{
        removeError(0);
    }

}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function mainPasswordValidate(){
    if(campos[2].value.length < 8)
    {
        setError(2);
    }
    else{
        removeError(2);
        comparePassword();
    }

}

function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8 )
    {
        removeError(3);
    }
    else{
        setError(3);
    }
}


function telefoneValidate(){
    if(campos[5].value.length <11)
    {
        setError(5);
    }
    else
    {
        removeError(5);
    }
}


function cpfValidate(){
    if(campos[4].value.length <14)
    {
        setError(4);
    }
    else
    {
        removeError(4);
    }
}

//Função para ocultar e mostrar senha principal

const MainPassword = document.querySelector("[data-senha]");
const imageEye = document.querySelector(".img__eye");

imageEye.onclick = () => {
    if(MainPassword.type == "password")
    {
        MainPassword.type = "text";
        imageEye.src = "../../assets/img/eye-off.svg";
    }
    else{
        MainPassword.type = "password";
        imageEye.src = "../../assets/img/eye.svg";
    }
}

//Função para ocultar e mostrar a senha repitida 

const repeatedPassword = document.querySelector("[data-senha-repetida]");
const img__olho = document.querySelector(".img__eyes");

    img__olho.onclick = () => {
    if(repeatedPassword.type == "password")
    {
        repeatedPassword.type = "text";
        img__olho.src = "../../assets/img/eye-off.svg";
    }
    else{
        repeatedPassword.type = "password";
        img__olho.src = "../../assets/img/eye.svg";
    }
};

//Bloquear caracter especial de input senha

const senhaInput = document.querySelector("#senha");

senhaInput.addEventListener("keypress", function (e){
    if(!checkchar(e))
    {
        e.preventDefault();
    }
});


function checkchar (e){
    
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-zA-Z0-9]';
    
    if(char.match(pattern))
    {
        return true;
    }
    else
    {
       return false; 
    }
    
}

//Bloquear caracter especial do input repetir senha

const repetir_senha = document.querySelector("#repetirSenha");

repetir_senha.addEventListener("keypress", function (e){
    if(!checkchar(e))
    {
        e.preventDefault();
    }
});


function checkchar (e){
    
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-zA-Z0-9]';
    
    if(char.match(pattern))
    {
        return true;
    }
    else
    {
        
    }
    
}

//Bloquear números no input Primeiro Nome

const InputNome = document.querySelector("#PrimeiroNome");

InputNome.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58)
    {
        e.preventDefault();
    }
})


//Bloquear caracter especial no input Primeiro Nome

const nomeInput = document.querySelector("#PrimeiroNome");

nomeInput.addEventListener("keypress", function(e){

    if(!checkchar(e)) {
        e.preventDefault();
    }

});

function checkchar(e) {

const char = String.fromCharCode(e.keyCode);

const pattern = '[a-zA-Z0-9]';

if(char.match(pattern))
{
    return true;
}

}


//Bloquear letras no input telefone

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /^[0-9.]+$/;
    if( !regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault)
        theEvent.preventDefault();
    }
}

//Bloquear letras no input CEP

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /^[0-9.]+$/;
    if( !regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault)
        theEvent.preventDefault();
    }
}

//Bloquear números no input Endereço

const inputEndereço = document.querySelector("#endereco");

inputEndereço.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58)
    {
        e.preventDefault();
    }
})


//Bloquear caracteres especiais no input Endereço

const EndereçoInput = document.querySelector("#endereco");

EndereçoInput.addEventListener("keypress", function(e){

    if(!checkchar(e)) {
        e.preventDefault();
    }

});

function checkchar(e) {

const char = String.fromCharCode(e.keyCode);

const pattern = '[a-zA-Z0-9]';

if(char.match(pattern))
{
    return true;
}

}

//Bloquear caracteres especiais no input Bairro

const BairroInput = document.querySelector("#bairro");

BairroInput.addEventListener("keypress", function(e){

    if(!checkchar(e)) {
        e.preventDefault();
    }

});

function checkchar(e) {

const char = String.fromCharCode(e.keyCode);

const pattern = '[a-zA-Z0-9]';

if(char.match(pattern))
{
   
    return true;
}

}


//Bloquear números no input Bairro

const inputBairro = document.querySelector("#bairro");

inputBairro.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58)
    {
        e.preventDefault();
    }
})



//Mascara para o input telefone

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value;
}

//Mascara para o input CPF

const input = document.querySelector('#cpf')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'  
    }else if (inputLength == 11) {
        input.value += '-'
    }
})

//Bloquear letras no input cpf

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /^[0-9.]+$/;
    if( !regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault)
        theEvent.preventDefault();
    }
}


    
 

