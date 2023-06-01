document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const userField = document.getElementById("user");
    const nomeField = document.getElementById("nome");
    const emailField = document.getElementById("email");
    const celularField = document.getElementById("celular");
    const passwordField = document.getElementById("password");
    const passwordConfirmField = document.getElementById("passwordConfirm");
    const cadastroButton = document.getElementById("botao-cadastro");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Obter os valores dos campos do formulário
      const user = userField.value;
      const nome = nomeField.value;
      const email = emailField.value;
      const celular = celularField.value;
      const password = passwordField.value;
      const passwordConfirm = passwordConfirmField.value;
  
      // Verificar se os campos foram preenchidos
      if (user === "" || nome === "" || email === "" || celular === "" || password === "" || passwordConfirm === "") {
        alert("Por favor, preencha todos os campos!");
        return;
      }
  
      // Verificar se a senha e a confirmação de senha coincidem
      if (password !== passwordConfirm) {
        alert("A senha e a confirmação de senha não coincidem!");
        return;
      }
  
      // Verificar se o usuário já existe no LocalStorage
      const cadastroExistente = JSON.parse(localStorage.getItem("cadastro"));
      if (cadastroExistente && cadastroExistente.user === user) {
        alert("Usuário já existe! Por favor, escolha um nome de usuário diferente.");
        return;
      }
  
      // Armazenar os dados de cadastro no LocalStorage
      const cadastro = {
        user: user,
        nome: nome,
        email: email,
        celular: celular,
        password: password
      };
  
      localStorage.setItem("cadastro", JSON.stringify(cadastro));
  
      // Redirecionar para a página de login
      window.location.href = "../Login/index.html";
    });
  });