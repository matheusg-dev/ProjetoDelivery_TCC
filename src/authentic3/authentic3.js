//Função para ocultar/ mostrar senha

const input__senha = document.querySelector(".input__senha");
const imagem__olho = document.querySelector(".imagem__olho");

imagem__olho.onclick = () => {
  if(input__senha.type == "password") {
    input__senha.type = "text";
    imagem__olho.src = "../../assets/img/eye-off.svg";
   } 
   else 
   {
    input__senha.type = "password";
    imagem__olho.src = "../../assets/img/eye.svg";
  }
};


const main = document.getElementsByClassName('main');
const campo1 = document.querySelector('.input__email');
const campo2 = document.querySelector('.input__senha');
const span__email = document.querySelector('.span__email');
const span__senha = document.querySelector('.span__senha');
const emailRegex =  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//Função para validar email

function emailValidate(){
  if(!emailRegex.test(campo1.value))
  {
   setError1();
  }
  else{
    removeError1();
  }
}

function setError1(){
  campo1.style.border = '2px solid #e63636';
  span__email.style.display = 'block';
}

function removeError1(){
  campo1.style.border = '';
  span__email.style.display = 'none';
}



//Função para validar senha

function senhaValidate(){
  if(campo2.value.length <8)
  {
    setError2();
  }
  else
  {
    removeError2();
  }
}

function setError2(){
  campo2.style.border = '2px solid #e63636';
  span__senha.style.display = 'block';
}

function removeError2(){
   campo2.style.border = '';
   span__senha.style.display = 'none';
}

//Bloqueio de caracteres especiais no input senha

const senhaInput = document.querySelector("#senha");

senhaInput.addEventListener("keypress", function(e){

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
    console.log(char);
    return true;
  }
  else{
    console.log(char);
  }
}
