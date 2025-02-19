//Crie uma função que receba um ano e:
//Retorne "Ano bissexto" se o ano for divisível por 4, mas não por 100, a menos que seja divisível por 400.
//Caso contrário, retorne "Não é ano bissexto".

function bissexto(ano){
    if(ano % 4 === 0 || ano % 400 === 0 ){
        return 'ano bissexto'
    }else{
        return 'Não é ano bissexto'
    }
}

console.log(bissexto(2016))