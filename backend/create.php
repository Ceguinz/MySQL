<?php
include 'conexao.php';

$data = json_decode(file_get_contents("php://input"));

$nome = $data->nome;
$email = $data->email;
$telefone = $data->telefone;

$sql = "INSERT INTO usuarios (nome, email, telefone) VALUES ('$nome', '$email', '$telefone')";

if ($conn->query($sql) === TRUE) {
    echo "Usuário criado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
