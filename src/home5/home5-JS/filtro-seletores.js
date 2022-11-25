const btnSelecao = document.querySelectorAll(".selecao__berry");
const deletaPrincipal = document.querySelector("[data-deleta]");
const displayTudo = document.querySelector("[data-filtrotudo]");
const prato = document.querySelectorAll("[data-prato]")

btnSelecao[0].onclick = function () {
  deletaPrincipal.classList.add("none");

  if (deletaPrincipal.classList.contains("none")) {
    displayTudo.classList.remove("none");

    let tituleH2 = document.createElement("h2");
    tituleH2.classList.add("recomendado", "popular");
    tituleH2.innerHTML = "Todos os pratos";
    displayTudo.appendChild(tituleH2);

    let containerTudo = document.createElement("section")
    containerTudo.classList.add("flex", "combinado")
    deletaPrincipal.appendChild(containerTudo)

 /*    console.log(containerTudo)
    containerTudo.array.forEach(element => {

    });
 */
  } else {
  }
};
