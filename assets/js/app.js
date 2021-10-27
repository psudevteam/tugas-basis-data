function getId(id, isi) {
  return (document.getElementById(id).innerHTML = isi);
}

let id = "main-area";

let tableMahasiswa =
  '<section id="table-area">' +
  '<div class="breadcumb">' +
  "<h1>Data Mahasiswa</h1> " +
  "</div> " +
  '<table id="table" class="table-wrap"> ' +
  '<thead class="table-head"> ' +
  "<tr> " +
  "<th>Nama</th> " +
  "<th>Nim</th> " +
  "<th>Fakultas</th> " +
  "<th>Prodi</th> " +
  "<th>Tahun Masuk</th> " +
  "<th>Aksi</th> " +
  "</tr> " +
  "</thead> " +
  '<tbody class="table-body"> ' +
  "<tr> " +
  "<td>Maulana Sodiqin</td> " +
  "<td>41037006200028</td> " +
  "<td>Teknik</td> " +
  "<td>Informatilka</td> " +
  "<td>2020</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "<tr> " +
  "<td>Fenny Oktaviani</td> " +
  "<td>41037006200034</td> " +
  "<td>Teknik</td> " +
  "<td>Informatilka</td> " +
  "<td>2020</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "<tr> " +
  "<td>Astie Noer Hadiyanti</td> " +
  "<td>41037006200031</td> " +
  "<td>Teknik</td> " +
  "<td>Informatilka</td> " +
  "<td>2020</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "<tr> " +
  "<td>Lutfi Husaeri</td> " +
  "<td>41037006200006</td> " +
  "<td>Teknik</td> " +
  "<td>Informatilka</td> " +
  "<td>2020</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "<tr> " +
  "<td>Kirwan Herdiansyah</td> " +
  "<td>41037006200007</td> " +
  "<td>Teknik</td> " +
  "<td>Informatilka</td> " +
  "<td>2020</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "<tr> " +
  "<td>Desi Suci Nopianti</td> " +
  "<td>41037006200019</td> " +
  "<td>Teknik</td> " +
  "<td>Informatilka</td> " +
  "<td>2020</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "</tbody> " +
  "</table> " +
  "</section>";

let tableDosen =
  '<section id="table-area">' +
  '<div class="breadcumb">' +
  "<h1>Data Dosen Pengampu</h1> " +
  "</div> " +
  '<table id="table" class="table-wrap"> ' +
  '<thead class="table-head"> ' +
  "<tr> " +
  "<th>Nama</th> " +
  "<th>Nip</th> " +
  "<th>Fakultas</th> " +
  "<th>Jumlah Matkul</th> " +
  "<th>Aksi</th> " +
  "</tr> " +
  "</thead> " +
  '<tbody class="table-body"> ' +
  "<tr> " +
  "<td>Soecipto S.Kom, M.kom</td> " +
  "<td>1111978273</td> " +
  "<td>Teknik</td> " +
  "<td>3</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "<tr> " +
  "<td>Isbandi S.Kom, M.Kom</td> " +
  "<td>3454654634</td> " +
  "<td>Teknik</td> " +
  "<td>2</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "</tbody> " +
  "</table> " +
  "</section>";

let tableMatkul =
  '<section id="table-area">' +
  '<div class="breadcumb">' +
  "<h1>Data Mata Kuliah</h1> " +
  "</div> " +
  '<table id="table" class="table-wrap"> ' +
  '<thead class="table-head"> ' +
  "<tr> " +
  "<th>Nama</th> " +
  "<th>Kode</th> " +
  "<th>Fakultas</th> " +
  "<th>Prodi</th> " +
  "<th>Jam</th> " +
  "<th>SKS</th> " +
  "<th>Dosen Pengampu</th> " +
  "<th>Aksi</th> " +
  "</tr> " +
  "</thead> " +
  '<tbody class="table-body"> ' +
  "<tr> " +
  "<td>Basis Data</td> " +
  "<td>TIF866</td> " +
  "<td>Teknik</td> " +
  "<td>Informatilka</td> " +
  "<td>08.00 - 10.00</td> " +
  "<td>4</td> " +
  "<td>Soecipto</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "<tr> " +
  "<td>Pemograman Web</td> " +
  "<td>TIF6667</td> " +
  "<td>Teknik</td> " +
  "<td>Informatilka</td> " +
  "<td>10.30 - 13.00</td> " +
  "<td>4</td> " +
  "<td>Soecipto</td> " +
  "<td> " +
  '<button class="table-btn edit">Edit</button> ' +
  '<button class="table-btn delete">Hapus</button> ' +
  "</td> " +
  "</tr> " +
  "</tbody> " +
  "</table> " +
  "</section>";

let home =
  ' <section id="banner-area"> ' +
  '<div class="banner-wrap">' +
  '<div class="banner-text">' +
  '<h1 class="banner-title">' +
  "Selamat Datang <br />" +
  "di PSU University" +
  "</h1>" +
  "</div>" +
  '<div class="banner-img">' +
  '<img src="./assets/img/banner/banner-2.jpg" alt="Banner" />' +
  "</div>" +
  "</div>" +
  " </section>";

function getTableMahasiswa() {
  getId(id, tableMahasiswa);
}

function getTableMatkul() {
  getId(id, tableMatkul);
}

function getTableDosen() {
  getId(id, tableDosen);
}

function getHome() {
  getId(id, home);
}
