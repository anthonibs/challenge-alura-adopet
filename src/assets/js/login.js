const local = JSON.parse(localStorage.getItem('listas'))
const formLogin = document.forms.login

console.log("LISTA>", local);


formLogin.addEventListener('submit', e => {
    e.preventDefault()

    const { cademail, cadsenha } = formLogin

    const logado = local.find(elemento => {
        console.log(elemento.cademail === cademail.value)

        return elemento.cademail === cademail.value
    })

    const senhaLogada = local.find(elemento => {
        console.log(elemento.cadsenha === cadsenha.value);
        return elemento.cadsenha === cadsenha.value
    })



    if (logado && senhaLogada) {
        console.log("Entrei na minha conta");
        // cademail.value = ''
 
        const userValid = {
            email: logado.cademail,
            senha: senhaLogada.cadsenha
        }
       

        window.location.href = 'http://127.0.0.1:5501/src/assets/pages/perfil/perfil.html'

        
        // Cria um token para autenticar o usuário
        let token = Math.random().toString(16).substring(2) +  Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))



    } else {
        console.log("Senha ou email estão errados!!");
        const resultado = document.getElementById('mensagem')
        let loginInvalido = document.createElement('div')
        
        loginInvalido.innerHTML = `<div class="senhasDiferentes col-12 mx-auto"> <i class="bi bi-exclamation-triangle-fill"></i>  Usuário ou senha incorretos</div>`
        
        setInterval(() => {
            loginInvalido.innerHTML = ''
        }, 2000);
        
        cademail.focus()

        resultado.appendChild(loginInvalido)

    }

})

