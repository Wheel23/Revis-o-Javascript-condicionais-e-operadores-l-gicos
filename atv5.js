//Se a nota for maior ou igual a 9, retorne "Excelente".
//Se a nota for entre 7 e 8.9, retorne "Bom".
//Se a nota for entre 5 e 6.9, retorne "Regular".
//Se a nota for menor que 5, retorne "Insuficiente".
//Use if-else e operadores lógicos (&&, ||).

function alunos(nota){
    if(nota >= 9){
        return 'Excelente';
    }if(nota >=7 && nota <= 8.9){
        return 'Bom'
    }if(nota >= 5 && nota <= 6.9){
        return 'Regular'
    }else{
        return 'Insuficiente'
    }
    
}

console.log(alunos(10))