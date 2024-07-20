const loginSignupBtn = document.getElementById('loginSignupBtn');
const popupContainer = document.getElementById('popupContainer');
const closeBtn = document.getElementById('closeBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const toggleSignupBtn = document.getElementById('toggleSignup');
const toggleLoginBtn = document.getElementById('toggleLogin');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');

loginSignupBtn.addEventListener('click', function () {
    popupContainer.style.display = 'flex';
    signupForm.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    popupContainer.style.display = 'none';
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        popupContainer.style.display = 'none';
    }
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Add your login logic here
    console.log('Logging in...');
});
toggleSignupBtn.addEventListener('click', function () {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

toggleLoginBtn.addEventListener('click', function () {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});




// signupForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.log("Pass and CPass same...");
//     const formData = {
//         name: document.getElementById('signupUsername').value,
//         phone: document.getElementById('signupContactNumber').value,
//         email: document.getElementById('signupEmail').value,
//         password: document.getElementById('signupPassword').value,
//         address: document.getElementById('signupAddress').value,
//         topup: document.getElementById('signupTopUpAmount').value
//     };
//     console.log(JSON.stringify(formData)) ;
//     fetch('http://localhost:8090/saveUser', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//         .then(response => {
//             if (response.ok) {
//                 alert('Your account has been successfully created, please check your mail to verify your account.');
//             } else {
//                 alert('Failed to save user');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });


signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("Pass and CPass same...");
    const formData = {
        name: document.getElementById('signupUsername').value,
        phone: document.getElementById('signupContactNumber').value,
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value,
        address: document.getElementById('signupAddress').value,
        topup: document.getElementById('signupTopUpAmount').value
    };
    console.log(JSON.stringify(formData));
    fetch('http://localhost:8090/saveUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                showPopup('Your account has been successfully created, please check your mail to verify your account.');
            } else {
                showPopup('Failed to save user');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Some Problem has occured, Please try again later.");
        });
});

function showPopup(message) {
    let popup_success = document.getElementById('popup') ;
    popup_success.style.display = 'block';
    popupText.innerText = message;
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
        console.log("Worked.") ;
        popup_success.style.display = 'none';
    }, 3000);
}

let username = getCookie('username_auction_store_logged_in');
if (username !== null) {
    window.location.href = 'registered_user.html' ;
} else {
    alert("Not a registered User") ;
}