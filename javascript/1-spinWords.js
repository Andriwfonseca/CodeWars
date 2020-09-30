/*Escreva uma função que receba uma string de uma
 ou mais palavras e retorne a mesma string, mas com
  todas as palavras de cinco ou mais letras invertidas
   (exemplo: palavra de cinco letras e não menos)
   resultado: arvalap de ocnic sartel e não sonem */

function spinWords(palavra){    

    let palavraSeparada = palavra.split(" ");

    for(let x = 0;x < palavraSeparada.length;x++){
        if (palavraSeparada[x].length > 4){
            palavraSeparada[x] = palavraSeparada[x].split('').reverse().join('');
        }
        
        
    }
    return palavraSeparada.join(' ');
}

/*Outra forma de fazer*/
function spinWords2(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }