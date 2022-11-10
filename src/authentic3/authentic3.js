const nome__input = document.querySelector(".nome__input");
const imagem__olho = document.querySelector(".imagem__olho");

imagem__olho.onclick = () => {
  if (nome__input.type === "password") {
    nome__input.type = "text";
    imagem__olho.src = "../../assets/img/eye-off.svg";
  } else {
    nome__input.type = "password";
    imagem__olho.src = "../../assets/img/eye.svg";
  }
};
