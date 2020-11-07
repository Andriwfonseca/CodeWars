/*
Sua tarefa é escrever uma máscara de função,
que muda todos os caracteres, exceto os quatro últimos caracteres em '#'.
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
*/
function maskify(cc) {

    let resultado = cc;
    if (cc.length > 4){
        let ultimosDigitos = cc.substr(-4,4);
        resultado = "";
        for(let x = 0;x < cc.length - 4;x++){
            resultado += '#';
        }
        resultado += ultimosDigitos;
    }
    
    return resultado;
}

//Outros maneiras de fazer
function maskify2(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

function maskify3(cc) {
cc = cc.split("");
for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}