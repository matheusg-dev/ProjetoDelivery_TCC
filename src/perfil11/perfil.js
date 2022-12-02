let btn = document.querySelector("#recebe");
let formulario = new Map();

btn.addEventListener("click", function(e){
    e.preventDefault();
    imprimeDados();

});

function imprimeDados() {
    for (var [key, value] of formulario) {
    
        console.log(key + " = " + value);
    }}