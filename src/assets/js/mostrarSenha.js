const exibirSenha = document.querySelectorAll('[passShow]')

// Exibe e esconde a senha no input password, alterando password para text
for (let i = 0; i < exibirSenha.length; i++) {
    const selecionaInupt = document.querySelectorAll('[inputSenha]')

    exibirSenha[i].addEventListener('click', e => {
        if (selecionaInupt[i].getAttribute('type') === 'password') {
            selecionaInupt[i].setAttribute('type', 'text')
            trocarIcone('bi-eye-slash-fill', 'bi-eye-fill', exibirSenha[i])

        } else if (selecionaInupt[i].getAttribute('type') === 'text') {
            selecionaInupt[i].setAttribute('type', 'password')
            trocarIcone('bi-eye-fill', 'bi-eye-slash-fill', exibirSenha[i])

        } else {
            console.log('Error no tipo do type');
        }
    })
}

// Troca ícone
function trocarIcone(icone1, icone2, alvo) {
    alvo.classList.remove(icone2)
    alvo.classList.add(icone1)
}