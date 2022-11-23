/*
//Função para limitar o numero de caracter no imput Número

function validar(field) {
    str = field.value;
    if (str.length > 3) {
      field.value = str.substring(0, str.length - 1);
    }
  }
  
  function numerico(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;
    if (key_code == 8 || key_code == 9 || key_code == 13 || key_code == 27 || key_code == 46) {
      return true;
    } else if ((key_code >= 35) && (key_code <= 40)) {
      return true
    } else if ((key_code >= 48) && (key_code <= 57)) {
      return true
    }
    return false;
  }
  */

//Função para validar número de telefone

  const main = document.getElementsByClassName('main');
  const campo = document.querySelector('.input_numero');
  const span_numero = document.querySelector('.span-numero');

  function setError(){
    campo.style.border = '2px solid #e63636';
    span_numero.style.display = 'block';
  }

  function removeError(){
    campo.style.border = '';
    span_numero.style.display = 'none';
  }

  function NumeroTelValidate(){
    if(campo.value.length <11)
    {
        setError();
    }
    else{
        removeError();
    }
  }


  //Mascara para o input Número

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

//Bloquear letras no input Número

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

  //Bloqueio de caracteres especiais do input Número

  const NúmeroInput = document.querySelector("#NumEntrega");

NúmeroInput.addEventListener("keypress", function(e){

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

 //Bloqueio de caracteres especiais do input Endereço

 const EndereçoInput = document.querySelector("#entrega");

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
     console.log(char);
     return true;
 }
 
 }

 //Bloquear números no input Endereço

const inputEndereço = document.querySelector("#entrega");

inputEndereço.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58)
    {
        e.preventDefault();
    }
})




  