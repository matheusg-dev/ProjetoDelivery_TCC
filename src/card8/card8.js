const main = document.getElementsByClassName('main');
const campos = document.querySelectorAll('.input');
const spans = document.querySelectorAll('.spans-inputs');

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none';
}

function name_CardValidate(){
    if(campos[0].value.length <3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function numberCardValidate(){
    if(campos[1].value.length <19)
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

//Bloquear números no input Nome

const inputNome = document.querySelector("#nome");

inputNome.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58)
    {
        e.preventDefault();
    }
})

//Bloquear caracteres especiais do input Nome

const NomeInput = document.querySelector("#nome");

NomeInput.addEventListener("keypress", function(e){

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


//Mascara para input número do cartão

const inputCartao = document.querySelector('#cartao');

inputCartao.addEventListener('keypress', () => {
    let inputlength = inputCartao.value.length
    
    console.log(inputlength);


if(inputlength === 4 || inputlength === 9 || inputlength === 14) {
    inputCartao.value += ''
}

})
