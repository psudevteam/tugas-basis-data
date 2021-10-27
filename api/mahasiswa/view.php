<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/db.php';
    include_once '../../models/Mahasiswa.php';

    $database = new DB();
    $db = $database->connect();

    $mahasiswa = new Mahasiswa($db);

    $mahasiswa->id = isset($_GET['id']) ? $_GET['id'] : die();

    $mahasiswa->getMahasiswaById();

    $mahasiswa_arr = array(
        'id' => $mahasiswa->id,
        'nama' => $mahasiswa->nama,
        'nim' => $mahasiswa->nim,
        'fakultas' => $mahasiswa->fakultas,
        'prodi' => $mahasiswa->prodi,
        'tahunMasuk' => $mahasiswa->tahunMasuk,
    );

    print_r(json_encode($mahasiswa_arr));