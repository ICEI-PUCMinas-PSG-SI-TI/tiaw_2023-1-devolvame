const inputUsuario = document.querySelector("#user")
const inputNome = document.querySelector("#nome")
const inputEmail = document.querySelector("#email")
const inputCelular = document.querySelector("#celular")
const inputSenha = document.querySelector("#password")
const inputConfirmeSenha = document.querySelector("#passwordConfirm")
const botaoCadastrar = document.querySelector("#botao-cadastro")

botaoCadastrar.addEventListener("click", validaCadastro)

function validaCadastro(e) {
    e.preventDefault();

    const usuario = inputUsuario.value;
    const nome = inputNome.value;
    const email = inputEmail.value;
    const celular = inputCelular.value;
    const senha = inputSenha.value;
    const confirmeSenha = inputConfirmeSenha.value;

    // Remove todas as classes de erro existentes
    removerEstilosErro();

    // Verifica se algum campo está vazio
    if (!usuario || !nome || !email || !celular || !senha || !confirmeSenha) {

        if (!usuario) { marcarCampoErro(inputUsuario) }
        if (!nome) { marcarCampoErro(inputNome) }
        if (!email) { marcarCampoErro(inputEmail) }
        if (!celular) { marcarCampoErro(inputCelular) }
        if (!senha) { marcarCampoErro(inputSenha) }
        if (!confirmeSenha) { marcarCampoErro(inputConfirmeSenha) }

        return
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmeSenha) {
        marcarCampoErro(inputSenha, "As senhas são diferentes!");
        marcarCampoErro(inputConfirmeSenha, "As senhas são diferentes!");
        return;
    }

    // codigo para cadastro de usuario vem aqui
    let usuarioParaCadastro = {
        usuario: usuario,
        nome: nome,
        email: email,
        celular: celular,
        senha: senha
    }

    console.log("validação com sucesso", usuarioParaCadastro)
    cadastrar(usuarioParaCadastro);

}

function cadastrar(usuarioCadastro) {

    if (usuarios.find(usuario => usuario.usuario === usuarioCadastro.usuario)) {
        alert("Usuário já existe! Por favor, escolha um nome de usuário diferente.");
        return;
    }

    if (usuarios.find(usuario => usuario.email === usuarioCadastro.email)) {
        alert("Email já existe! Por favor, escolha um email diferente.");
        return;
    }

    // Armazenar os dados de cadastro no LocalStorage
    usuarios.push(usuarioCadastro);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Redirecionar para a página de login
    window.location.href = "../Login/index.html";
}

// Mensagem de erro abaixo do input
function marcarCampoErro(campo, mensagem) {
    campo.parentElement.classList.add("campo-erro");
    let span = campo.parentElement.nextElementSibling
    span.innerText = mensagem || "Preencha o campo!";
    span.style.display = "inline-block"
}

// Função auxiliar para remover todas as classes de erro dos campos
function removerEstilosErro() {
    const campos = document.querySelectorAll("input");
    campos.forEach(campo => {
        campo.parentElement.classList.remove("campo-erro");
    });

    const spans = document.querySelectorAll("span")
    spans.forEach(span => {
        span.style.display = "none"
    })

}


/*BABI */
function formatCEP(cep) {
    return cep.replace(/\D/g, '');
}

function preencherEndereco(cep, ruaInput, bairroInput) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado.');
            } else {
                ruaInput.value = data.logradouro;
                bairroInput.value = data.bairro;
            }
        });
}

var cepInput = document.getElementById('cep');
var ruaInput = document.getElementById('rua');
var bairroInput = document.getElementById('bairro');

cepInput.addEventListener('input', function () {
    const cep = formatCEP(this.value);
    preencherEndereco(cep, ruaInput, bairroInput);
});