// Solicita o nome do usuário
let senha = window.prompt('coloque sua senha teste');

// Verifica se o usuário não cancelou o prompt
if (senha !== null && senha.trim() !== "") {
    // Seleciona o elemento onde o nome será exibido
    let nomeDisplay = document.getElementById("nomeDisplay");
    
    // Define o conteúdo do elemento com o valor da variável
    nomeDisplay.innerText = " " + espaco + "";
} else {
    // Se o usuário não colocou uma senha, mostra uma mensagem
    let nomeDisplay = document.getElementById("nomeDisplay");
    nomeDisplay.innerText = "Você não inseriu uma senha.";

    nomedisplay2.innerText = "seus dados não serão salvos.";
}