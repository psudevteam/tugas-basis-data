<?php
    class DB {
        private $host = 'localhost';
        private $db_name = 'kampus';
        private $username = 'root';
        private $password = 'toor';
        private $conn;

        public function connect(){
            $this->conn = null;

            try {
                $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e) {
                echo 'Koneksi Error: ' . $e->getMessage();
            }
            return $this->conn;
        }
    }