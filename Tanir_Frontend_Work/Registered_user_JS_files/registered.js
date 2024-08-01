const profileBtn = document.getElementById('profileBtn');
const logoutBtn = document.getElementById('logoutBtn');
const popupContainer = document.getElementById('popupContainer');
const closeBtn = document.getElementById('closeBtn');
const profileForm = document.getElementById('profileForm');
const closeProfileBtn = document.getElementById('closeProfileBtn');

profileBtn.addEventListener('click', function () {
    popupContainer.style.display = 'flex';
    profileForm.style.display = 'block';
});

logoutBtn.addEventListener('click', function () {
    console.log('Clicked');
    deleteCookie('username_auction_store_logged_in');
    window.location.href = 'index.html';
});

closeBtn.addEventListener('click', function () {
    popupContainer.style.display = 'none';
    profileForm.style.display = 'none';
});

closeProfileBtn.addEventListener('click', function () {
    popupContainer.style.display = 'none';
    profileForm.style.display = 'none';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        popupContainer.style.display = 'none';
        profileForm.style.display = 'none';
    }
});

document.getElementById('mobile-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('active');
    });

    if (navLinks.classList.contains('active')) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    } else {
        navLinks.style.maxHeight = null;
    }
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
        navLinks.style.maxHeight = null;

        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.remove('active');
        });
    });
});
