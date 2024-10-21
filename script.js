// Formulário
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();  // Impede o envio real do formulário
  
  // Exibe uma mensagem de agradecimento ao usuário
  alert("Obrigado pelo seu contato! Entraremos em breve.");
  
  // Limpa os campos do formulário após o envio
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";
});

  