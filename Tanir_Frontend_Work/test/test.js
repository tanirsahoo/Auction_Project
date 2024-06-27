console.log("Pass and CPass same...");
// const formData = {
//     name: document.getElementById('signupUsername').value,
//     phone: document.getElementById('signupContactNumber').value,
//     email: document.getElementById('signupEmail').value,
//     password: document.getElementById('signupPassword').value,
//     address: document.getElementById('signupAddress').value,
//     topup: document.getElementById('signupTopUpAmount').value
// };
const formData = {
    name: 'Tanir',
    phone: '9849465416',
    email: 'tanir.sahoo.2023@gmail.com',
    password: 'helloworld',
    address: 'helloworld',
    topup: 0
};
console.log(JSON.stringify(formData));
fetch('http://localhost:8090/saveUser', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(formData)
})
    .then(response => {
        if (response.ok) {
            alert('Your account has been successfully created, please check your mail to verify your account.');
        } else {
            alert('Failed to save user');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });


// fetch('https://dummyjson.com/posts/1', {
//     method: 'PUT', /* or PATCH */
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'I think I should shift to the moon',
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);