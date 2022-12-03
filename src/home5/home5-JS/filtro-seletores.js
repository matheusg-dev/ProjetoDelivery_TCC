const btnSelecao = document.querySelectorAll(".selecao__berry");
const deletaPrincipal = document.querySelector("[data-deleta]");
const displayTudo = document.querySelector("[data-filtrotudo]");
const prato = document.querySelectorAll("[data-prato]")

btnSelecao[0].onclick = function () {
  
  
  if (deletaPrincipal.classList.contains("verdadeiro")) {
    deletaPrincipal.classList.replace("verdadeiro", "none");

    displayTudo.classList.replace("none", "grid");
    displayTudo.classList.add("selecao__filtros")

    let containerTudo = document.createElement("section")
    containerTudo.classList.add("grid", "selecao__filtros")
    deletaPrincipal.appendChild(containerTudo)

    prato.forEach((pratos) => {
       const clone = pratos.cloneNode(true)
       clone.classList.add("remove")
       displayTudo.appendChild(clone)
    })
  } else {
    displayTudo.classList.replace("grid", "none")
    displayTudo.classList.remove("selecao__filtros")
    deletaPrincipal.classList.remove("none")

    const remove = document.querySelectorAll(".remove")

    remove.forEach((elemento) => {
      elemento.remove()
    })

    deletaPrincipal.classList.add("verdadeiro")
  }
};
