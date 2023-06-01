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
    console.log(nome)
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
    console.log("sucesso")
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
