<?php 
    class Dosen {
        private $conn;
        private $table = 'dosen';

        public $id;
        public $idPengguna;
        public $idHakAkses;
        public $nip;
        public $namaDosen;
        

        public function __construct($db) {
            $this->conn = $db;
        }

        public function getDosen() {
            // $query = 'SELECT
            //             dosen.id,
            //             dosen.namaDosen,
            //             dosen.nip,
            //         FROM
            //             ' . $this->table . '';

            $query = 'SELECT * FROM '. $this->table .' ';
            
            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        public function getMahasiswaById() {
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
                    WHERE
                        mahasiswa.id = ?
                    LIMIT 0,1    
                    ';
            
            $stmt = $this->conn->prepare($query);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->nama = $row['namaMahasiswa'];
            $this->nim = $row['nimMahasiswa'];
            $this->fakultas = $row['namaFakultas'];
            $this->prodi = $row['namaProdi'];
            $this->tahunMasuk = $row['tahun_masuk'];

        }

        public function createMahasiswa() {
            $query = 'INSERT INTO ' . $this->table . ' 
             SET
                idPengguna = :idPengguna,
                idHakAkses = :idHakAkses,
                nimMahasiswa = :nimMahasiswa,
                namaMahasiswa = :namaMahasiswa,
                prodi = :prodi,
                tahun_masuk = :tahun_masuk';

                $stmt = $this->conn->prepare($query);

                $this->idPengguna = htmlspecialchars(strip_tags($this->idPengguna));
                $this->idHakAkses = htmlspecialchars(strip_tags($this->idHakAkses));
                $this->nimMahasiswa = htmlspecialchars(strip_tags($this->nimMahasiswa));
                $this->namaMahasiswa = htmlspecialchars(strip_tags($this->namaMahasiswa));
                $this->prodi = htmlspecialchars(strip_tags($this->prodi));
                $this->tahun_masuk = htmlspecialchars(strip_tags($this->tahun_masuk));

                $stmt->bindParam(':idPengguna', $this->idPengguna);
                $stmt->bindParam(':idHakAkses', $this->idHakAkses);
                $stmt->bindParam(':nimMahasiswa', $this->nimMahasiswa);
                $stmt->bindParam(':namaMahasiswa', $this->namaMahasiswa);
                $stmt->bindParam(':prodi', $this->prodi);
                $stmt->bindParam(':tahun_masuk', $this->tahun_masuk);

                if($stmt->execute()) {
                    return true;
                    echo 'exec';
                }
                
                printf("Error : %s. \n", $stmt->error);

                return false;
        }

            public function updateMahasiswa() {
            $query = 'UPDATE ' . $this->table . ' 
             SET
                idPengguna = :idPengguna,
                idHakAkses = :idHakAkses,
                nimMahasiswa = :nimMahasiswa,
                namaMahasiswa = :namaMahasiswa,
                prodi = :prodi,
                tahun_masuk = :tahun_masuk
             WHERE
                id = :id';

                $stmt = $this->conn->prepare($query);

                $this->idPengguna = htmlspecialchars(strip_tags($this->idPengguna));
                $this->idHakAkses = htmlspecialchars(strip_tags($this->idHakAkses));
                $this->nimMahasiswa = htmlspecialchars(strip_tags($this->nimMahasiswa));
                $this->namaMahasiswa = htmlspecialchars(strip_tags($this->namaMahasiswa));
                $this->prodi = htmlspecialchars(strip_tags($this->prodi));
                $this->tahun_masuk = htmlspecialchars(strip_tags($this->tahun_masuk));
                $this->id = htmlspecialchars(strip_tags($this->id));

                $stmt->bindParam(':idPengguna', $this->idPengguna);
                $stmt->bindParam(':idHakAkses', $this->idHakAkses);
                $stmt->bindParam(':nimMahasiswa', $this->nimMahasiswa);
                $stmt->bindParam(':namaMahasiswa', $this->namaMahasiswa);
                $stmt->bindParam(':prodi', $this->prodi);
                $stmt->bindParam(':tahun_masuk', $this->tahun_masuk);
                $stmt->bindParam(':id', $this->id);

                if($stmt->execute()) {
                    return true;
                    echo 'exec';
                }
                
                printf("Error : %s. \n", $stmt->error);

                return false;
            }

            public function deleteMahasiswa(){ 
                echo 'Holla';
            }
     }

