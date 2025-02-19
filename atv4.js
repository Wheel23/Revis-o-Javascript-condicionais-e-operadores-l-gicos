//Se o número for positivo e par, retorne "Positivo e Par".
//Se o número for positivo e ímpar, retorne "Positivo e Ímpar".
//Se o número for negativo, retorne "Negativo".
//Se o número for zero, retorne "Zero".
function numeros(num){
    if(num > 0 && num % 2 === 0){
        return "Positivo e Par";
    }if(num > 0 && num %2 != 0 ){
        return "Positivo e Ímpar"
    }if(num < 0){
        return 'Negativo'
    }else{
        return 'Zero'
    }



}

console.log(numeros(1))