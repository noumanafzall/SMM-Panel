let scrollDown = document.getElementById('see-more');
scrollDown.addEventListener('click' , (e) => {
    window.scroll({
        top:700,
        behavior:'smooth'
    })
})

// opening login form

function loginPage(){
    var loginPage = 'login.html';
    window.open(loginPage);
}
document.getElementById('get-started').addEventListener('click', loginPage);   



// opening signup form
function regPage(){
var regPage = 'signup.html';
window.open(regPage);
}
document.getElementById('register-link').addEventListener('click',regPage);