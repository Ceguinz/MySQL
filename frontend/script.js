function adicionarUsuario() {
    var nome = prompt("Nome:");
    var email = prompt("Email:");
    var telefone = prompt("Telefone:");

    var data = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    fetch('../backend/create.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        carregarUsuarios();
    });
}

function carregarUsuarios() {
    var usuariosElement = document.getElementById('usuarios');
    usuariosElement.innerHTML = "";

    fetch('../backend/read.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(function(usuario) {
            var li = document.createElement('li');
            li.textContent = usuario.nome + " (" + usuario.email + ", " + usuario.telefone + ")";

            var btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = function() {
                editarUsuario(usuario.id);
            };

            var btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.onclick = function() {
                excluirUsuario(usuario.id);
            };

            li.appendChild(btnEditar);
            li.appendChild(btnExcluir);

            usuariosElement.appendChild(li);
        });
    });
}

function editarUsuario(id) {
    var novoNome = prompt("Novo Nome:");
    var novoEmail = prompt("Novo Email:");
    var novoTelefone = prompt("Novo Telefone:");

    var data = {
        id: id,
        nome: novoNome,
        email: novoEmail,
        telefone: novoTelefone
    };

    fetch('../backend/update.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        carregarUsuarios();
    });
}

function excluirUsuario(id) {
    var confirmacao = confirm("Tem certeza que deseja excluir este usuário?");

    if (confirmacao) {
        var data = { id: id };

        fetch('../backend/delete.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            carregarUsuarios();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    carregarUsuarios();
});
