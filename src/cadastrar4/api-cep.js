'use strict';

const LimparFormulário = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    
}

const preencherFormulário = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    
}

const Enumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && Enumero(cep);

const pesquisarCep = async() => {
    LimparFormulário();

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')){     
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }
        else{
            preencherFormulário(endereco);
        }

    }
    else
    {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
    
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);