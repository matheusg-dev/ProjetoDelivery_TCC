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

//Função para bloquear caracteres especiais e números

function letras(){
	tecla = event.keycode;
	if (tecla >= 48 && tecla <= 57){
	    return false;
	}else{
	   return true;
	}
}

//Mascara para input número do cartão

const input = document.querySelector('input');

input.addEventListener('keypress', () => {
    let inputlength = input.value.length


if(inputlength === 4 || inputlength === 9 || inputlength === 14) {
    input.value += ''
}
})
