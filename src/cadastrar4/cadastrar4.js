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

imageEye.onclick = function () {
    if(MainPassword.type == "password")
    {
        MainPassword.type = "text";
        imageEye.src = "../../assets/img/eye-off.svg";
    }
    else{
        MainPassword.type = "password";
        imageEye.src = "../../assets/img/eye.svg";
    }
};


const repeatedPassword = document.querySelector("[data-senha]");
const imageEye = document.querySelector(".img__eye");

imageEye.onclick = function () {
    if(repeatedPassword.type == "password")
    {
        repeatedPassword.type = "text";
        imageEye.src = "../../assets/img/eye-off.svg";
    }
    else{
        repeatedPassword.type = "password";
        imageEye.src = "../../assets/img/eye.svg";
    }
};


//Bloquear caracter especial no input Nome

const nomeInput = document.querySelector("#nome");

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
    console.log(char);
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
    
 

