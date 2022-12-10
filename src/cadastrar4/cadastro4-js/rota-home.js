


btnCadastrar.addEventListener("mouseover", function() {
    let primeiroNome = formStorage.elements[0].value;
    let email = formStorage.elements[1].value;
    let senha = formStorage.elements[2].value;
    let repetirSenha = formStorage.elements[3].value;
    let cpf = formStorage.elements[4].value;
    let telefoneWhats = formStorage.elements[5].value;
    let cep = formStorage.elements[6].value;
    let endereco = formStorage.elements[7].value;
    let numero = formStorage.elements[8].value;
    let bairro = formStorage.elements[9].value;
    
  if(primeiroNome & email == "" ){
    console.log(formStorage.elements[0].value, " foi")
   }else{
    console.log(primeiroNome, "igual a vazio")
   }
})
 