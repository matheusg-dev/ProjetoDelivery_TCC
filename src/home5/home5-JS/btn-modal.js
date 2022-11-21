const btnFiltroPesquisa = document.querySelector(".cabecalho__barra--filtro");
const btnCLoseModal = document.querySelector(".fecha__modal");
const modalBarra = document.querySelector(".modal__filtro--barra");

btnFiltroPesquisa.onclick = function () {
  modalBarra.showModal();
};

btnCLoseModal.onclick = function () {
  btnCLoseModal.close();
};
