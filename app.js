//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let copiaAmigos = [];


// Lista de amigos do localStorage
window.onload = function() {
    if (localStorage.getItem('amigos')) {
        amigos = JSON.parse(localStorage.getItem('amigos'));
        atualizarLista();
    }
}


function adicionarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === ''){
        alert('Digite o nome do pokemon !');
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    atualizarLista();

    // Salvar lista de amigos
    localStorage.setItem('amigos', JSON.stringify(amigos));
}


function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
            
    for (let i = 0; i < amigos.length; i++){
        let nome = document.createElement("li");
        nome.textContent = amigos[i];
        listaAmigos.appendChild(nome);
    }
}

function limparLista(){
    localStorage.removeItem('amigos');
    amigos = [];
    atualizarLista();
}

function sortearAmigo(nomeSorteador){
    if (amigos.length === 0){
        alert('Nenhum pokemon adicionado!');
        return;
    }

    // Lista vazia, cria uma nova cópia
    if (copiaAmigos.length === 0) {
        copiaAmigos = [...amigos];
    }

    let amigoSorteado;
    let indiceSorteado;

    // O amigo sorteado não seja o próprio sorteador
    do {
        indiceSorteado = Math.floor(Math.random() * copiaAmigos.length);
        amigoSorteado = copiaAmigos[indiceSorteado];
    } while (amigoSorteado == nomeSorteador);

    
    alert(`O pokemon sorteado é: ${amigoSorteado}`);

    
    // Remover o amigo sorteado da lista de cópia
    copiaAmigos.splice(indiceSorteado, 1);

    // Se todos os amigos já foram sorteados e limpa a lista
    if (copiaAmigos.length === 0) {
        alert('Todos os pokemons já foram sorteados!');
        limparLista();
        resetarSorteio();
    }
}


function resetarSorteio() {
    copiaAmigos = [];
    alert('A lista do sorteio foi resetada');
}
