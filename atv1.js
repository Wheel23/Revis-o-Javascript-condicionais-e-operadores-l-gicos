function idade(ano){
    
    if(ano >=65){
        return "idoso";

    }if(ano >=18 && ano <= 65){
        return 'adulto';
    }else{
        return 'menor idade';
    }
}

console.log(idade(79))
