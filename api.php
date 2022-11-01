<?php

function getConnexion()
{
    return new PDO("mysql:host=localhost;dbname=association_data; charset = utf8", "root", "root");
}

function getChat()
{
    $pdo = getConnexion();
    $req = "SELECT message,date FROM chat";
    $stmt = $pdo->prepare(($req));
    $stmt->execute();
    $formation = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    sendJSON($formation);
}

function sendJSON($infos)
{
    header("Accs-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    echo json_encode($infos, JSON_UNESCAPED_UNICODE);
}
