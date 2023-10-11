// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger Menu Diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Ketika cursor mengarah target akan membesar
const targetElement = document.getElementById('zoom');
targetElement.addEventListener('mouseover', function() {
    this.classList.add('zoomed');
});

targetElement.addEventListener('mouseout', function() {
    this.classList.remove('zoomed');
});
