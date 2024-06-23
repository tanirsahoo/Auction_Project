// let session_check = sessionStorage.getItem('username_auction_store_logged_in') ;
// if(session_check !== null){
//     window.location.href='registered_user.html';
// }
// else{
//     console.log("Not a registered User");
// }

// sessionStorage.setItem('username_auction_store_logged_in' , 'Registered_user');


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


// setCookie('username_auction_store_logged_in' , 'Hello Tanir' , 5) ;

// deleteCookie('username_auction_store_logged_in') ;

let username = getCookie('username_auction_store_logged_in');
if (username !== null) {
    window.location.href = 'registered_user.html' ;
} else {
    alert("Not a registered User") ;
}