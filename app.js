//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o elemento de input e o valor digitado
    let amigoInput = document.getElementById('amigo');
    let nome = amigoInput.value.trim();

    // Verifica se o nome não está vazio e se já não existe na lista
    if (nome === '') {
        // Usa uma mensagem de alerta simples, já que o prompt não deve ser usado
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista exibida no HTML
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os nomes atualizados
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

    // Limpa o campo de input
    amigoInput.value = '';
}

// Função para sortear os amigos
function sortearAmigo() {
    // Verifica se há pelo menos 4 amigos na lista para o sorteio
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    // Embaralha a ordem dos amigos usando o algoritmo de Fisher-Yates
    let amigosEmbaralhados = [...amigos];
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    // Exibe o resultado do sorteio
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior
    
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        let li = document.createElement('li');
        let amigoSorteado = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
        li.textContent = `${amigosEmbaralhados[i]} -> ${amigoSorteado}`;
        resultado.appendChild(li);
    }
}

// Função para reiniciar a aplicação
function reiniciar() {
    // Limpa o array de amigos
    amigos = [];
    
    // Limpa as listas no HTML
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}