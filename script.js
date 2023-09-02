let scrollDown = document.getElementById('see-more');
scrollDown.addEventListener('click' , (e) => {
    window.scroll({
        top:700,
        behavior:'smooth'
    })
})

// opening login/signup forms

function loginPage(){
    var loginPage = 'login.html';
    window.open(loginPage);
}
document.getElementById('get-started').addEventListener('click', loginPage);   
