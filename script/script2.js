


function validateForm() {
  // Obtém os valores dos campos do formulário
  const name = document.forms["frmContato"]["userName"].value.trim();
  const email = document.forms["frmContato"]["userEmail"].value.trim();
  const assunto = document.forms["frmContato"]["subject"].value.trim();
  const message = document.forms["frmContato"]["message"].value.trim();

  // Define a variável de erro
  let hasError = false;

  // Limpa mensagens de erro anteriores
  const errorMessages = document.querySelectorAll(".invalid-feedback");
  errorMessages.forEach(message => {
    message.innerHTML = "";
    message.classList.remove("invalid-feedback");
  });

  // Limpa classes de erro anteriores
  const invalidFields = document.querySelectorAll(".is-invalid");
  invalidFields.forEach(field => {
    field.classList.remove("is-invalid");
  });

  // Verifica se o campo "Nome" foi preenchido
  if (name === "") {
    document.getElementById("userName-info").innerHTML = "Por favor, digite seu nome";
    document.getElementById("userName-info").classList.add("invalid-feedback");
    document.forms["frmContato"]["userName"].classList.add("is-invalid");
    hasError = true;
  }

  // Verifica se o campo "E-mail" foi preenchido corretamente
  if (!isValidEmail(email)) {
    document.getElementById("userEmail-info").innerHTML = "Por favor, digite um e-mail válido";
    document.getElementById("userEmail-info").classList.add("invalid-feedback");
    document.forms["frmContato"]["userEmail"].classList.add("is-invalid");
    hasError = true;
  }

  // Verifica se o campo "Assunto" foi preenchido corretamente
  if (assunto === "") {
    document.getElementById("userSubject-info").innerHTML = "Por favor, digite um assunto válido";
    document.getElementById("userSubject-info").classList.add("invalid-feedback");
    document.forms["frmContato"]["subject"].classList.add("is-invalid");
    hasError = true;
  }

  // Verifica se o campo "Mensagem" foi preenchido
  if (message === "") {
    document.getElementById("userMessage-info").innerHTML = "Por favor, digite sua mensagem";
    document.getElementById("userMessage-info").classList.add("invalid-feedback");
    document.forms["frmContato"]["message"].classList.add("is-invalid");
    hasError = true;
  } else if (message.length < 10) {
    document.getElementById("userMessage-info").innerHTML = "Por favor, escreva uma mensagem com pelo menos 10 caracteres";
    document.getElementById("userMessage-info").classList.add("invalid-feedback");
    document.forms["frmContato"]["message"].classList.add("is-invalid");
    hasError = true;
  }

  // Retorna false caso haja erro
  if (hasError) {
    alert("Por favor, corrija os campos destacados em vermelho.");
    return false;
  }

  // Retorna true caso todos os campos tenham sido preenchidos corretamente
  return true;
}

function isValidEmail(email) {
  // Expressão regular para verificar se o e-mail é válido
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}