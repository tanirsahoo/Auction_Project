// document.getElementById('mobile-menu').addEventListener('click', function() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');

//     const bars = document.querySelectorAll('.bar');
//     bars.forEach(bar => {
//         bar.classList.toggle('active');
//     });

//     if (navLinks.classList.contains('active')) {
//         navLinks.style.maxHeight = navLinks.scrollHeight + "px";
//     } else {
//         navLinks.style.maxHeight = "0";
//     }
// });


document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('active');
    });

    if (navLinks.classList.contains('active')) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    } else {
        navLinks.style.maxHeight = "0";
    }
});