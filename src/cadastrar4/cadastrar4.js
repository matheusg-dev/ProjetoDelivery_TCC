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
    if(emailRegex.test(campos[2].value))
    {
        console.log('VALIDADO');
    }
    else
    {
        console.log('NÃO VALIDADO');
    }
}

function telefoneValidate(){
    if(campos[3].value.length <11)
    {
        setError(3);
    }
    else
    {
        removeError(3);
    }
}

function sobrenomeValidate(){
    if(campos[1].value.length <4)
    {
        setError(1);
    }
    else{
        removeError(1);
    }
}

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

//Bloquear caracter especial no input sobrenome

const sobrenomeInput = document.querySelector("#sobrenome");

sobrenomeInput.addEventListener("keypress", function(e){

    if(!checkchar(e)) {
        e.preventDefault();
    }
});

function checkchar(e){

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-zA-Z0-9]';

    if(char.match(pattern))
    {
        console.log(char);
        return true;
    }
    else{
        console.log(char);
    }
}

//Bloquear letras no input telefone

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault)
        theEvent.preventDefault();
    }
}