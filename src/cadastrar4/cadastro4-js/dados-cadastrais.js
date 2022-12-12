const btnSalvaLocal = document.querySelector(".botao")


btnSalvaLocal.addEventListener("click", () => {
  
  const vazio = document.querySelectorAll(".vazio");
  if (vazio.length != 0) {
    
    localStorage.clear()
  }else{

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

    let dadosObjetoUsuario = new Array();

    if (localStorage.hasOwnProperty("dadosObjetoUsuario")) {
      // getItem pegar
      dadosObjetoUsuario = JSON.parse(
        localStorage.getItem("dadosObjetoUsuario")
      );
    }

    dadosObjetoUsuario.push({
      primeiroNome,
      email,
      senha,
      repetirSenha,
      cpf,
      telefoneWhats,
      cep,
      endereco,
      numero,
      bairro,
    });

    localStorage.setItem(
      "dadosObjetoUsuario",
      JSON.stringify(dadosObjetoUsuario)
    );    

  }


})
