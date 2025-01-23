// Solicita o nome do usuário
let espaco = window.prompt('olá, seja bem vindo ao meu site.Qual o seu nome?');

// Verifica se o usuário não cancelou o prompt
if (espaco !== null && espaco.trim() !== "") {
    // Seleciona o elemento onde o nome será exibido
    let nomeDisplay = document.getElementById("nomeDisplay");
    
    // Define o conteúdo do elemento com o valor da variável
    nomeDisplay.innerText = "Olá, " + espaco + "!";
} else {
    // Se o usuário não inserir um nome, exibe uma mensagem padrão
    let nomeDisplay = document.getElementById("nomeDisplay");
    nomeDisplay.innerText = "Você não inseriu um nome.";
}
//guardando a informação da senha do usuário
let