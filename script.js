
const toggleButton = document.getElementById('toggleSkills');
const skillsList = document.getElementById('skillsList');

toggleButton.addEventListener('click', function() {
    skillsList.classList.toggle('hidden');
});


const infoButton = document.getElementById('showInfo');
infoButton.addEventListener('click', function() {
    alert('Nama: Febrian Iradatul Rahman\nKelas: Sistem Informasi 2018, Universitas Ma'soem);
});
