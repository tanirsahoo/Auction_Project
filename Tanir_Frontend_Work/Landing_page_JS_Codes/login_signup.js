const loginSignupBtn = document.getElementById('loginSignupBtn');
const popupContainer = document.getElementById('popupContainer');
const closeBtn = document.getElementById('closeBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const toggleSignupBtn = document.getElementById('toggleSignup');
const toggleLoginBtn = document.getElementById('toggleLogin');

loginSignupBtn.addEventListener('click', function() {
    popupContainer.style.display = 'flex';
    signupForm.style.display='block';
});

closeBtn.addEventListener('click', function() {
    popupContainer.style.display = 'none';
    loginForm.style.display='none';
    signupForm.style.display='none' ;
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        popupContainer.style.display = 'none';
    }
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    console.log('Logging in...');
});

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your signup logic here
    console.log('Signing up...');
});

toggleSignupBtn.addEventListener('click', function() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

toggleLoginBtn.addEventListener('click', function() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});