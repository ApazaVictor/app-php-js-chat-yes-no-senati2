<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$metodo = $_SERVER['REQUEST_METHOD'];

$respuesta = [];
switch ($metodo) {
    case 'GET':
        $respuesta = [
            'mensaje' => 'Método GET correcto',
            'data' => $_GET
        ];
        break;

    case 'POST':
        $data_entrada = json_decode(file_get_contents("php://input"), true);
        $respuesta = [
            'mensaje' => 'Método POST retorno',
            'data' => $data_entrada,
        ];
        break;

    case 'PUT':
        $data_entrada = json_decode(file_get_contents("php://input"), true);
        $respuesta = [
            'mensaje' => 'Método PUT correcto',
            'data' => $data_entrada,
        ];
        break;

    case 'DELETE':
        $respuesta = [
            'mensaje' => 'Método DELETE correcto',
            'data' => $_GET
        ];
        break;
}

echo json_encode($respuesta);

?>
