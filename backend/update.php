<?php
include 'conexao.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$nome = $data->nome;
$email = $data->email;
$telefone = $data->telefone;

$sql = "UPDATE usuarios SET nome='$nome', email='$email', telefone='$telefone' WHERE id=$id";

if ($conn->query($sql) === TRUE) {
    echo "Usuário atualizado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
