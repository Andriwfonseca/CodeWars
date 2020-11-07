/*
Essa função receberá uma string, se tiver caracter repetido nessa string, 
ele será substituido por ')', se nao tiver repetido, será substituido
por '(', exemplos: 
                    "din"      =>  "((("
                    "recede"   =>  "()()()"
                    "Success"  =>  ")())())"
                    "(( @"     =>  "))((" 
*/
function duplicateEncode(word){
    let resultado = "";
    const charMap = {};
    
    Array.from(word).forEach(char =>{
        char = char.toLowerCase();
        if (!charMap[char]){
            charMap[char] = {
                count: 1,
            }
        }else{
            charMap[char].count++;
        }
    });
    console.log(charMap)
    for (let i = 0;i < word.length;i++){
        let char = word[i].toLowerCase();
        resultado += charMap[char].count > 1 ? ")" : "(";
    }
    return resultado;
}

//Outras maneiras de fazer
function duplicateEncode2(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

  function duplicateEncode3(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}