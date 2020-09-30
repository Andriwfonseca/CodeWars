/*Receber um array de com numeros e string, e retornar apenas os numeros*/
function filter_list(array) {
    
    return array.filter(valor => typeof valor === 'number');
}

/*Outros métodos*/
function filter_list2(l) {
    var res = [];
                for(var item=0;item<l.length;item++)
                {
                    if (typeof l[item] === "number")
                    {
                        res.push(l[item]);
                    }
      
                }
                return res;
    }

function filter_list3(l) {
    return l.filter(Number.isInteger);
    }