const logout = document.getElementById('logout')

// Deslogar usuário, caso volte para a tela do perfil abrirá uma mensagem para voltar para tela de login
if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'http://127.0.0.1:5501/src/assets/pages/login/login.html'
}

logout.addEventListener('click', e => {
    e.preventDefault()

    logoutAccont()
})

function logoutAccont() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'http://127.0.0.1:5501/src/assets/pages/login/login.html'
}



// Tela de Perfil
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
