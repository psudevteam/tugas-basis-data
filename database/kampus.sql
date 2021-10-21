-- phpMyAdmin SQL Dump
-- version 5.1.1-1.fc34
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 21, 2021 at 04:28 AM
-- Server version: 10.5.12-MariaDB
-- PHP Version: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kampus`
--

-- --------------------------------------------------------

--
-- Table structure for table `dosen`
--

CREATE TABLE `dosen` (
  `id` int(11) NOT NULL,
  `idPengguna` int(11) NOT NULL,
  `idHakAkses` int(11) NOT NULL,
  `namaDosen` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dosen`
--

INSERT INTO `dosen` (`id`, `idPengguna`, `idHakAkses`, `namaDosen`) VALUES
(3, 3, 2, 'Soecipto');

-- --------------------------------------------------------

--
-- Table structure for table `fakultas`
--

CREATE TABLE `fakultas` (
  `id` int(11) NOT NULL,
  `namaFakultas` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fakultas`
--

INSERT INTO `fakultas` (`id`, `namaFakultas`) VALUES
(1, 'Teknik'),
(2, 'Pendidikan');

-- --------------------------------------------------------

--
-- Table structure for table `hakAkses`
--

CREATE TABLE `hakAkses` (
  `id` int(11) NOT NULL,
  `namaHakAkses` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hakAkses`
--

INSERT INTO `hakAkses` (`id`, `namaHakAkses`) VALUES
(1, 'Dosen'),
(2, 'Mahasiswa');

-- --------------------------------------------------------

--
-- Table structure for table `kontrakDosen`
--

CREATE TABLE `kontrakDosen` (
  `id` int(11) NOT NULL,
  `idDosen` int(11) NOT NULL,
  `idMatkul` int(11) NOT NULL,
  `idProdi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kontrakDosen`
--

INSERT INTO `kontrakDosen` (`id`, `idDosen`, `idMatkul`, `idProdi`) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `kontrakMahasiswa`
--

CREATE TABLE `kontrakMahasiswa` (
  `id` int(11) NOT NULL,
  `nimMahasiswa` bigint(20) NOT NULL,
  `idDosen` int(11) NOT NULL,
  `idMatkul` int(11) NOT NULL,
  `idProdi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kontrakMahasiswa`
--

INSERT INTO `kontrakMahasiswa` (`id`, `nimMahasiswa`, `idDosen`, `idMatkul`, `idProdi`) VALUES
(1, 4103700620028, 3, 3, 1),
(2, 4103700620029, 3, 3, 2),
(3, 4103700620040, 3, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id` bigint(20) NOT NULL,
  `idPengguna` int(11) NOT NULL,
  `idHakAkses` int(11) NOT NULL,
  `nimMahasiswa` varchar(30) NOT NULL,
  `namaMahasiswa` varchar(100) NOT NULL,
  `prodi` varchar(100) NOT NULL,
  `tahun_masuk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id`, `idPengguna`, `idHakAkses`, `nimMahasiswa`, `namaMahasiswa`, `prodi`, `tahun_masuk`) VALUES
(7, 1, 1, '4103700620028', 'Maulana Sodiqin', '1', 2020);

-- --------------------------------------------------------

--
-- Table structure for table `mataKuliah`
--

CREATE TABLE `mataKuliah` (
  `id` int(11) NOT NULL,
  `namaMatkul` varchar(100) NOT NULL,
  `dosenMatkul` varchar(100) NOT NULL,
  `sksMatkul` int(11) NOT NULL,
  `jamMatkul` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mataKuliah`
--

INSERT INTO `mataKuliah` (`id`, `namaMatkul`, `dosenMatkul`, `sksMatkul`, `jamMatkul`) VALUES
(2, 'Basis Data', '3', 4, '13.00 - 15.00'),
(3, 'Frontend VueJS', '3', 4, '15.00 - 17.00');

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id` int(11) NOT NULL,
  `idHakAkses` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pengguna`
--

INSERT INTO `pengguna` (`id`, `idHakAkses`, `username`, `email`, `password`) VALUES
(1, 1, 'msdqn', 'maul@psu.id', '$2y$10$YmAgt5.v2KUog.Uk/9tLd.bIjOXwhF1MGn7p8qLy0OVtDF6oVWv2S');

-- --------------------------------------------------------

--
-- Table structure for table `penilaian`
--

CREATE TABLE `penilaian` (
  `id` int(11) NOT NULL,
  `idDosen` int(11) NOT NULL,
  `idMatkul` int(11) NOT NULL,
  `nimMahasiswa` varchar(20) NOT NULL,
  `nilaiMahasiswa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `penilaian`
--

INSERT INTO `penilaian` (`id`, `idDosen`, `idMatkul`, `nimMahasiswa`, `nilaiMahasiswa`) VALUES
(1, 3, 1, '4103700620028', 80);

-- --------------------------------------------------------

--
-- Table structure for table `programStudi`
--

CREATE TABLE `programStudi` (
  `id` int(11) NOT NULL,
  `idFakultas` int(11) NOT NULL,
  `namaProdi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `programStudi`
--

INSERT INTO `programStudi` (`id`, `idFakultas`, `namaProdi`) VALUES
(1, 1, 'Informatika'),
(2, 2, 'Bahasa Inggris');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`idPengguna`);

--
-- Indexes for table `fakultas`
--
ALTER TABLE `fakultas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hakAkses`
--
ALTER TABLE `hakAkses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kontrakDosen`
--
ALTER TABLE `kontrakDosen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kontrakMahasiswa`
--
ALTER TABLE `kontrakMahasiswa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idUser` (`idPengguna`);

--
-- Indexes for table `mataKuliah`
--
ALTER TABLE `mataKuliah`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `penilaian`
--
ALTER TABLE `penilaian`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `programStudi`
--
ALTER TABLE `programStudi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dosen`
--
ALTER TABLE `dosen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fakultas`
--
ALTER TABLE `fakultas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `hakAkses`
--
ALTER TABLE `hakAkses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kontrakDosen`
--
ALTER TABLE `kontrakDosen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kontrakMahasiswa`
--
ALTER TABLE `kontrakMahasiswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `mataKuliah`
--
ALTER TABLE `mataKuliah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `penilaian`
--
ALTER TABLE `penilaian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `programStudi`
--
ALTER TABLE `programStudi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
