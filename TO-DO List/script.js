const inputTarefa = document.getElementById('tarefa');
const btnAdicionar = document.getElementById('adicionar');
const lista = document.getElementById('lista');

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();
    if (texto === '') {
        alert('Digite uma tarefa');
        return;
    }

    const li = document.createElement('li');
    li.textContent = texto;

    // Botão de concluir tarefa
    const btnConcluir = document.createElement('button');
    btnConcluir.textContent = '✔';
    btnConcluir.onclick = () => {
        li.classList.toggle('concluida');
        salvarTarefas();
    };

    // Botão de remover tarefa
    const btnRemover = document.createElement('button');
    btnRemover.textContent = '❌';
    btnRemover.onclick = () => {
        li.remove();
        salvarTarefas();
    };

    li.appendChild(btnConcluir);
    li.appendChild(btnRemover);
    lista.appendChild(li);

    inputTarefa.value = '';
    salvarTarefas();
}

btnAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

function salvarTarefas() {
    const tarefas = [];
    lista.querySelectorAll('li').forEach(li => {
        tarefas.push({
            texto: li.firstChild.textContent,
            concluida: li.classList.contains('concluida')
        });
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t.texto;
        if (t.concluida) li.classList.add('concluida');

        const btnConcluir = document.createElement('button');
        btnConcluir.textContent = '✔';
        btnConcluir.onclick = () => {
            li.classList.toggle('concluida');
            salvarTarefas();
        };

        const btnRemover = document.createElement('button');
        btnRemover.textContent = '❌';
        btnRemover.onclick = () => {
            li.remove();
            salvarTarefas();
        };

        li.appendChild(btnConcluir);
        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

carregarTarefas();