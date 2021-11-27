const app = Vue.createApp({
  data() {
    return {
      dataMahasiswa: [],
      dataDosen: [],
      dataMatkul: [],
      dataFakultas: [],
      isBannerShow: true,
      isTableShow: false,
      isTableDosenShow: false,
      isTableMahasiswaShow: false,
      isTableMatakuliahShow: false,
      isTableFakultasShow: false,
      isEditDosenShow: false,
      isEditMahasiswaShow: false,
      isEditMatakuliahShow: false,
      isEditFakultasShow: false,
    };
  },

  computed: {
    isBannerAppear() {
      return (
        this.isBannerShow &&
        !this.isTableShow &&
        !this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        !this.isEditFakultasShow
      );
    },

    isTableAppear() {
      return (
        this.isTableShow &&
        !this.isBannerShow &&
        !this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        !this.isEditFakultasShow
      );
    },

    isTableMahasiswaAppear() {
      return (
        this.isTableShow &&
        this.isTableMahasiswaShow &&
        !this.isTableDosenShow &&
        !this.isTableMatakuliahShow &&
        !this.isTableFakultasShow &&
        !this.isBannerShow &&
        !this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        !this.isEditFakultasShow
      );
    },

    isTableDosenAppear() {
      return (
        this.isTableShow &&
        !this.isTableMahasiswaShow &&
        this.isTableDosenShow &&
        !this.isTableMatakuliahShow &&
        !this.isTableFakultasShow &&
        !this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        !this.isEditFakultasShow &&
        !this.isBannerShow
      );
    },

    isTableMatakuliahAppear() {
      return (
        this.isTableShow &&
        !this.isTableMahasiswaShow &&
        !this.isTableDosenShow &&
        this.isTableMatakuliahShow &&
        !this.isBannerShow &&
        !this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        !this.isEditFakultasShow
      );
    },

    isTableFakultasAppear() {
      return (
        this.isTableShow &&
        !this.isTableMahasiswaShow &&
        !this.isTableDosenShow &&
        !this.isTableMatakuliahShow &&
        this.isTableFakultasShow &&
        !this.isBannerShow &&
        !this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        !this.isEditFakultasShow
      );
    },

    isEditMahasiswaAppear() {
      return (
        !this.isTableShow &&
        !this.isTableMahasiswaShow &&
        !this.isTableDosenShow &&
        !this.isTableMatakuliahShow &&
        !this.isTableFakultasShow &&
        !this.isBannerShow &&
        this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        !this.isEditFakultasShow
      );
    },

    isEditMatakuliahAppear() {
      return (
        !this.isTableShow &&
        !this.isTableMahasiswaShow &&
        !this.isTableDosenShow &&
        !this.isTableMatakuliahShow &&
        !this.isTableFakultasShow &&
        !this.isBannerShow &&
        !this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        this.isEditMatakuliahShow &&
        !this.isEditFakultasShow
      );
    },

    isEditDosenAppear() {
      return (
        !this.isTableShow &&
        !this.isTableMahasiswaShow &&
        !this.isTableDosenShow &&
        !this.isTableMatakuliahShow &&
        !this.isTableFakultasShow &&
        !this.isBannerShow &&
        !this.isEditMahasiswaShow &&
        this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        !this.isEditFakultasShow
      );
    },

    isEditFakultasAppear() {
      return (
        !this.isTableShow &&
        !this.isTableMahasiswaShow &&
        !this.isTableDosenShow &&
        !this.isTableMatakuliahShow &&
        !this.isTableFakultasShow &&
        !this.isBannerShow &&
        !this.isEditMahasiswaShow &&
        !this.isEditDosenShow &&
        !this.isEditMatakuliahShow &&
        this.isEditFakultasShow
      );
    },
  },

  methods: {
    getBanner() {
      this.isBannerShow = true;
      this.isTableMahasiswaShow = false;
      this.isTableDosenShow = false;
      this.isTableMatakuliahShow = false;
      this.isTableFakultasShow = false;
      this.isTableShow = false;
      this.isEditMahasiswaShow = false;
      this.isEditDosenShow = false;
      this.isEditMatakuliahShow = false;
      this.isEditFakultasShow = false;
    },

    async getTableMahasiswa() {
      try {
        const res = await fetch(
          "http://localhost/tugas-basis-data/api/mahasiswa/get.php"
        );
        const { data } = await res.json();
        this.dataMahasiswa = data;
      } catch (error) {
        console.log(error);
      }
      this.isTableShow = true;
      this.isTableMahasiswaShow = true;
      this.isTableDosenShow = false;
      this.isTableMatakuliahShow = false;
      this.isTableFakultasShow = false;
      this.isBannerShow = false;
      this.isEditMahasiswaShow = false;
      this.isEditDosenShow = false;
      this.isEditMatakuliahShow = false;
      this.isEditFakultasShow = false;
    },

    async getTableDosen() {
      try {
        const res = await fetch(
          "http://localhost/tugas-basis-data/api/dosen/get.php"
        );
        const { data } = await res.json();
        this.dataDosen = data;
      } catch (error) {
        console.log(error);
      }
      this.isTableShow = true;
      this.isTableMahasiswaShow = false;
      this.isTableDosenShow = true;
      this.isTableMatakuliahShow = false;
      this.isTableFakultasShow = false;
      this.isBannerShow = false;
      this.isEditMahasiswaShow = false;
      this.isEditDosenShow = false;
      this.isEditMatakuliahShow = false;
      this.isEditFakultasShow = false;
    },

    getTableMatakuliah() {
      this.isTableShow = true;
      this.isTableMahasiswaShow = false;
      this.isTableDosenShow = false;
      this.isTableMatakuliahShow = true;
      this.isTableFakultasShow = false;
      this.isBannerShow = false;
      this.isEditMahasiswaShow = false;
      this.isEditDosenShow = false;
      this.isEditMatakuliahShow = false;
      this.isEditFakultasShow = false;
    },

    getTableFakultas() {
      this.isTableShow = true;
      this.isTableMahasiswaShow = false;
      this.isTableDosenShow = false;
      this.isTableMatakuliahShow = false;
      this.isTableFakultasShow = true;
      this.isBannerShow = false;
      this.isEditMahasiswaShow = false;
      this.isEditDosenShow = false;
      this.isEditMatakuliahShow = false;
      this.isEditFakultasShow = false;
    },

    getEditFakultas() {
      this.isTableShow = false;
      this.isTableMahasiswaShow = false;
      this.isTableDosenShow = false;
      this.isTableMatakuliahShow = false;
      this.isTableFakultasShow = false;
      this.isBannerShow = false;
      this.isEditMahasiswaShow = false;
      this.isEditDosenShow = false;
      this.isEditMatakuliahShow = false;
      this.isEditFakultasShow = true;
    },

    getEditMahasiswa() {
      this.isTableShow = false;
      this.isTableMahasiswaShow = false;
      this.isTableDosenShow = false;
      this.isTableMatakuliahShow = false;
      this.isTableFakultasShow = false;
      this.isBannerShow = false;
      this.isEditMahasiswaShow = true;
      this.isEditDosenShow = false;
      this.isEditMatakuliahShow = false;
      this.isEditFakultasShow = false;
    },

    getEditDosen() {
      this.isTableShow = false;
      this.isTableMahasiswaShow = false;
      this.isTableDosenShow = false;
      this.isTableMatakuliahShow = false;
      this.isTableFakultasShow = false;
      this.isBannerShow = false;
      this.isEditMahasiswaShow = false;
      this.isEditDosenShow = true;
      this.isEditMatakuliahShow = false;
      this.isEditFakultasShow = false;
    },

    getEditMatakuliah() {
      this.isTableShow = false;
      this.isTableMahasiswaShow = false;
      this.isTableDosenShow = false;
      this.isTableMatakuliahShow = false;
      this.isTableFakultasShow = false;
      this.isBannerShow = false;
      this.isEditMahasiswaShow = false;
      this.isEditDosenShow = false;
      this.isEditMatakuliahShow = true;
      this.isEditFakultasShow = false;
    },
  },
});

app.mount("#app");
