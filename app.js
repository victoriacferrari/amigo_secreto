//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação: campo vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Atualiza a lista exibida
    atualizarLista();
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validação: lista vazia
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome correspondente
    const nomeSorteado = amigos[indiceSorteado];

    // Esconde a lista de amigos
    document.getElementById("listaAmigos").classList.add("esconder");

    // Mostra o resultado formatado
    const resultado = document.getElementById("resultadoSorteio");
    resultado.innerHTML = `Amigo secreto sorteado é: <strong>${nomeSorteado}</strong>`;
    resultado.classList.remove("esconder"); // Garante que o resultado apareça
}

//botão reiniciar
function reiniciar() {
    // Limpa o array
    amigos = [];

    // Esconde o resultado do sorteio
    const resultado = document.getElementById("resultadoSorteio");
    resultado.innerHTML = "";
    resultado.classList.add("esconder");

    // Torna a lista visível novamente
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    lista.classList.remove("esconder");
}
