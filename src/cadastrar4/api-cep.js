function consumir()
{
    let cep = document.getElementById('cep').value;
    fetch("https://viacep.com.br/ws/" + cep + "/json/")
    .then(response => response.json())
    .then(json => setData(json))
}

function setData(json)
{
    document.getElementById('cidade').innerText = json.localidade;
    document.getElementById('bairro').innerText = json.bairro;
    document.getElementById('rua').innerText = json.logradouro;
}

function api_cep(){
    
}