const formStorage = document.forms.item(0);

formStorage[10].addEventListener("click", function () {
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

  if (primeiroNome == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    formStorage[0].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  } else {
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
  }

  if (email == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    formStorage[1].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }

  if (senha == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    const senhaNomes = document.querySelectorAll(".nomes")
    senhaNomes.forEach((e) => {
        e.classList.add("colunm")
    })  
    formStorage[2].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }

  if (repetirSenha == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    const senhaNomes = document.querySelector(".nomes")
    senhaNomes.classList.add("colunm") 
    formStorage[3].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }

  if (cpf == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    formStorage[4].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }

  if (telefoneWhats == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    formStorage[5].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }

  if (cep == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    formStorage[6].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }

  if (endereco == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    formStorage[7].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }

  if (numero == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    formStorage[8].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }

  if (bairro == "") {
    let erromsg = document.createElement("p");
    erromsg.classList.add("span-required", "vazio");
    erromsg.style.display = "block";
    let small = document.createElement("small");

    small.innerText = "Campo vazio";

    formStorage[9].parentElement.appendChild(erromsg);
    erromsg.appendChild(small);
  }
});

formStorage.elements[0].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})

formStorage.elements[1].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})

formStorage.elements[2].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})

formStorage.elements[3].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})

formStorage.elements[4].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})


formStorage.elements[5].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})


formStorage.elements[6].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})


formStorage.elements[7].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})


formStorage.elements[8].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})


formStorage.elements[9].addEventListener("focus", () => {
    
    const vazio = document.querySelectorAll(".vazio");
    vazio.forEach((e) => {
      e.remove();
    });
})
