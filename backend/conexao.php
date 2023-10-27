<?php
$servername = "localhost";
$username = "seu_usuario_mysql";
$password = "sua_senha_mysql";
$dbname = "crud_example";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
?>
