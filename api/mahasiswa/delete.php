<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Methods, Authorization, X-Requested-With');

    include_once '../../config/db.php';
    include_once '../../models/Mahasiswa.php';

    $database = new DB();
    $db = $database->connect();

    $mahasiswa = new Mahasiswa($db);

    $data = json_decode(file_get_contents("php://input"));

    $mahasiswa->id = $data->id;

    $mahasiswa->deleteMahasiswa();
