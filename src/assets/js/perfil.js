const dbLocal = JSON.parse(localStorage.getItem('listas')) || []
const useLogin = JSON.parse(localStorage.getItem('userLogado')) || []
const dadosPerfil = JSON.parse(localStorage.getItem('infos')) || []

const form = document.forms.perfil

console.log("Cadastro ", dbLocal);
console.log("USE ", useLogin);
console.log("INFOS ", dadosPerfil);


form.addEventListener('click', e => {
    e.preventDefault()
    
    console.log('Enviei em salvar');
    
    const { cadnome, cadtelefone, cadcidade, cadsobre } = form
    const confere = dbLocal.find(element => element.cadnome === useLogin.email)
    
    if (confere) {
        console.log("Email não cadastrado");
        cadastarInformacoesUsuario()
        
    } else {
        console.log('Error');
        cadastarInformacoesUsuario()

    }

    function cadastarInformacoesUsuario() {

        if (cadnome.value == '') {
            console.log('O campo nome precisa ser preenchido');

        } else {

            const userPerfil = {
                "nome": cadnome.value,
                "telefone": cadtelefone.value,
                "cidade": cadcidade.value,
                "sobre": cadsobre.value
            }

            dadosPerfil.push(userPerfil)
        }
    }


    localStorage.setItem("infos", JSON.stringify(dadosPerfil))

})

