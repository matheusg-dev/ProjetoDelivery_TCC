
formStorage[10].onclick = (eventoEnviar) => {
  eventoEnviar.preventDefault();

  const vazio = document.querySelectorAll(".vazio");
  if (vazio.length != 0) {
    
  } else {
    window.location.assign("/src/home5/home5.html")
  }
}