function Login(name, password){
    if(name == 'admin' && password == 1234){
        return 'Login bem-sucedido!'
    }else{
        return 'Usuário ou senha incorretos!';
    }
}

 console.log(Login('admin', 123444))