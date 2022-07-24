const form = document.forms.cadastro
const inputs = document.querySelectorAll('.pet-form__input')


inputs.forEach(e => e.addEventListener('blur', monitora => {
    valida(monitora.target)
}))


function valida(input) {

    if (input.validity.valid === true) {
        input.parentElement.classList.remove('erro-container')
        input.parentElement.querySelector('.erro-mensagem').innerHTML = ''

    } else {
        // console.log(input.parentElement);
        input.parentElement.classList.add('erro-container')
        input.parentElement.querySelector('.erro-mensagem').innerHTML = mensagemDeErro(input.name, input)

    }
}

const arrErros = [
    "customError",
    "patternMismatch",
    "typeMismatch",
    "valid",
    "valueMissing",
    "tooShort"
]

const mensagemErros = {
    cadnome: {
        valueMissing: "Esqueceu-se de preencher o campo nome.",
        patternMismatch: "O campo nome deve conter apenas letras.",
        customError: "O campo nome é obrigatório.",
        tooShort: "Deve conter no mínimo 3 letras."
    },
    cademail: {
        valueMissing: "Esqueceu-se de preencher o campo email.",
        typeMismatch: "Preencha o campo com um email válido.",
        customError: "O campo email é obrigatório."
    },
    cadsenha: {
        valueMissing: "Esqueceu-se de preencher o campo senha.",
        patternMismatch: "Não pode conter caracteres especiais.",
        tooShort: "Deve conter no mínimo 8 caracteres.",
        customError: "O campo senha é obrigatório."
    }
}

function mensagemDeErro(tipoDeErro, input) {
    let message = ''
    arrErros.forEach(nameErro => {
        if (input.validity[nameErro]) {
            message = mensagemErros[tipoDeErro][nameErro]
        }
    })

    return message
}


form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Enviei o arquivo!!');

    const { cadnome, cademail, cadsenha, cadconfirmsenha } = form
    // console.log(`Nome: ${cadnome.value}, E-mail: ${cademail.value}, Senha:  ${cadsenha.value}, Confirma: ${cadconfirmsenha.value}`)

    confereSenhas(cadsenha, cadconfirmsenha)

    // if (cadsenha.value === cadconfirmsenha.value) {
    //     console.log("Senha está igual")
    //     const senhaCorreta = cadsenha.value
    //     console.log('A senha conferem +++ ', senhaCorreta);
    //     confereSenhas(cadsenha.value, cadconfirmsenha.value)

    // } else {
    //     const conferirSenha = document.querySelector('#conferirSenhas')
    //     let msg = document.createElement('div')

    //     msg.innerHTML = `<div class="senhasDiferentes col-11 col-sm-9 col-md-5 col-xl-5 mx-auto">As senhas estão diferentes</div>`

    //     conferirSenha.appendChild(msg)

    //     setTimeout(() => {
    //         msg.innerHTML = ''
    //         conferirSenha.appendChild(msg)
    //     }, 2500);

    // }

})


function confereSenhas(senha, confirma) {
    let senhaDefinida = ''

    if (senha.value === confirma.value) {
        console.log("Senha está igual")
        senhaDefinida = senha.value

    } else {
        const conferirSenha = document.querySelector('#conferirSenhas')
        let msg = document.createElement('div')

        msg.innerHTML = `<div class="senhasDiferentes col-11 col-sm-9 col-md-5 col-xl-5 mx-auto">Por favor confirme sua senha corretamente.</div>`

        conferirSenha.appendChild(msg)

        setTimeout(() => {
            msg.innerHTML = ''
            conferirSenha.appendChild(msg)
        }, 2500);
    }

    return senhaDefinida
}



const exibirSenha = document.querySelectorAll('[passShow]')

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

function trocarIcone(icone1, icone2, alvo) {
    alvo.classList.remove(icone2)
    alvo.classList.add(icone1)
}

function emailJahCadastrado(email, dbEmail) {

}

const arrEmail = [
    {
        nome: "anthoni",
        email: "meuemail@email.com"
    },
    {
        nome: "fred maia",
        email: "fred_fredoca@email.com"
    },
    {
        nome: "Lila Maesat",
        email: "maesat@email.com"
    },
    {
        nome: "Naruto Uzumaki",
        email: "uzumaki_kh@email.com"
    }
]

console.log("Lista ", arrEmail);
