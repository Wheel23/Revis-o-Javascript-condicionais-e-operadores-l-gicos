function desconto(code, valor){
    switch(code){
        case 'DESC10':
            console.log('DESCONTO VÁLIDO', 'valor é', 0.10 * valor)
            break;
        case 'DESC20':
            console.log('DESCONTO VÁLIDO', 0.20 * valor)
            break;
        default:
            break;
    }
        
}

console.log(desconto('DESC20', 100))
