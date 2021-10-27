<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/db.php';
    include_once '../../models/Mahasiswa.php';

    $database = new DB();
    $db = $database->connect();

    $mahasiswa = new Mahasiswa($db);

    $result = $mahasiswa->getMahasiswa();

    $num = $result->rowCount();

    if($num > 0) {
        $mahasiswa_arr = array();
        $mahasiswa_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $mahasiswa_item = array(
                'id' => $id,
                'nama' => $namaMahasiswa,
                'nim' => $nimMahasiswa,
                'fakultas' => $namaFakultas,
                'prodi' => $namaProdi,
                'tahunMasuk' => $tahun_masuk,
            );
            array_push($mahasiswa_arr['data'], $mahasiswa_item);
        }

        echo json_encode($mahasiswa_arr);
    } else {
        echo json_encode(
            array('message' => 'Tidak Ada Data')
        );
    }