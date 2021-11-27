<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/db.php';
    include_once '../../models/Dosen.php';

    $database = new DB();
    $db = $database->connect();

    $dosen = new Dosen($db);

    $result = $dosen->getDosen();

    $num = $result->rowCount();

    if($num > 0) {
        $dosen_arr = array();
        $dosen_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $dosen_item = array(
                'id' => $id,
                'nama' => $namaDosen,
                'nip' => $nip,
            );
            array_push($dosen_arr['data'], $dosen_item);
        }

        echo json_encode($dosen_arr);
    } else {
        echo json_encode(
            array('message' => 'Tidak Ada Data')
        );
    }