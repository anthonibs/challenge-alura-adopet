const form = document.forms.cadastro
const inputs = document.querySelectorAll('.pet-form__input')
const listas = JSON.parse(localStorage.getItem('listas')) || []


inputs.forEach(e => e.addEventListener('blur', monitora => {
    valida(monitora.target)
}))

function valida(input) {

    if (input.validity.valid === true) {
        input.parentElement.classList.remove('erro-container')
        input.parentElement.querySelector('.erro-mensagem').innerHTML = ''

    } else {
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


    const senha = confereSenhas(cadsenha, cadconfirmsenha)


    const existe = listas.find(elemento => elemento.cademail === cademail.value)

    if (!existe) {
        console.log("Email não cadastrado");
        salvaSenha(senha)

        cadnome.value = ''
        cademail.value = ''
        cadsenha.value = ''
        cadconfirmsenha.value = ''

        window.location.href = 'http://127.0.0.1:5501/src/assets/pages/login/login.html?'


    } else {
        console.log("Email já cadastrado");
        const conferirSenha = document.querySelector('#conferirSenhas')
        let msg = document.createElement('div')

        msg.innerHTML = `<div class="senhasDiferentes col-11 col-sm-9 col-md-5 col-xl-5 mx-auto"><i class="bi bi-exclamation-triangle-fill"></i>  Este email já está cadastrado.</div>`

        conferirSenha.appendChild(msg)

        setTimeout(() => {
            msg.innerHTML = ''
            conferirSenha.appendChild(msg)
        }, 2500);

    }


    function salvaSenha(senha) {

        if (senha === '') {
            console.log('Por favor confirme sua senha corretamente.');

        } else {

            const itemAtual = {
                "cadnome": cadnome.value,
                "cademail": cademail.value,
                "cadsenha": confereSenhas(cadsenha, cadconfirmsenha)
            }

            listas.push(itemAtual)
        }

        return
    }

    localStorage.setItem("listas", JSON.stringify(listas))

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
