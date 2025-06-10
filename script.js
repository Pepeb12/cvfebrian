//untuk tombol keterampilan
const toggleButton = document.getElementById('toggleSkills');
const skillsList = document.getElementById('skillsList');

toggleButton.addEventListener('click', function() {
    skillsList.classList.toggle('hidden');
});

// memunculkan tmbol alert
const infoButton = document.getElementById('showInfo');
infoButton.addEventListener('click', function() {
    alert('Nama: Febrian Iradatul Rahman\nKelas: Sistem Informasi 2018, Universitas Teknologi Indonesia');
});