<?php 
    class Mahasiswa {
        private $conn;
        private $table = 'mahasiswa';

        public $id;
        public $idPengguna;
        public $idHakAkses;
        public $nimMahasiswa;
        public $namaMahasiswa;
        public $prodi;
        public $tahun_masuk;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function getMahasiswa() {
            $query = 'SELECT
                        mahasiswa.id,
                        pengguna.username,
                        pengguna.email,                    
                        mahasiswa.namaMahasiswa,
                        fakultas.namaFakultas,
                        programStudi.namaProdi,
                        mahasiswa.nimMahasiswa,
                        mahasiswa.tahun_masuk
                    FROM
                        ' . $this->table . '
                    LEFT JOIN 
                        kontrakMahasiswa ON mahasiswa.nimMahasiswa = kontrakMahasiswa.nimMahasiswa
                    LEFT JOIN
                        programStudi ON programStudi.id = kontrakMahasiswa.idProdi
                    LEFT JOIN
                        fakultas ON fakultas.id = programStudi.idFakultas
                    LEFT JOIN
                        pengguna ON pengguna.id = mahasiswa.idPengguna
                    ';

            // $query = 'SELECT * FROM '. $this->table .' ';
            
            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }
    }