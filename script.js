let num = document.getElementById("inputvlr");
let areaNumber = document.getElementById("seladicionar");
let resultado = document.getElementById("res");
let listNumbers = [];


function adicionarNumero(){
    
    let valueDigi = Number(num.value);
    
    if(num.value.length == 0 ){
        alert('Por favor, adicionar um numero')
        return;
    } 
    
    if( valueDigi > 100 || valueDigi < 1){
        alert('Digite um numero entre 1 e 100')
        return;
    }  
    else{
        if(listNumbers.includes(valueDigi)){
            return alert('Numero já existente na lista')
         }
         else {
            listNumbers.push(valueDigi);
            let optionItem = document.createElement('option');
            optionItem.text = `Valor ${valueDigi} adicionado.`;
            areaNumber.appendChild(optionItem);
        }
      
    }
    num.value = '';
    num.focus();

}

function finalizar(){
    if(listNumbers.length == 0){
        alert('Por favor, adicionar um numero antes de finalizar')
    }
    else {
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${listNumbers.length} número(s) cadastrado(s)</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${Math.max(...listNumbers)}.</p>`
        resultado.innerHTML += `</p>O menor valor informado foi ${Math.min(...listNumbers)}.</p>`
        let totalSumNumbers = listNumbers.reduce((totalNumbers, listNumbers) => totalNumbers + listNumbers, 0 )
        resultado.innerHTML += `<p>Somandos todos os valores, temos ${totalSumNumbers}.</p>`;
        let averageNumbers = totalSumNumbers / listNumbers.length;
        resultado.innerHTML += `<p>Á média dos valores digitados é ${averageNumbers.toFixed(2)}</p>`;
        
    }

}



