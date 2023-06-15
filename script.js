const toggle = document.getElementById('toggleSun');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon')
})