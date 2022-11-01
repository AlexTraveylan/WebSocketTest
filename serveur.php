<?php
//http://localhost/WebSocketTest/
include 'api.php';

try {
    if (!empty($_GET['demande'])) {
        getChat();
    } else {
        throw new Exception("Problème de récupération de données");
    }
} catch (Exception $e) {
    $erreur = [
        "message" => $e->getMessage(),
        "code" => $e->getCode(),
    ];
    print_r($erreur);
}
