let scrollDown = document.getElementById('see-more');
scrollDown.addEventListener('click' , (e) => {
    window.scroll({
        top:700,
        behavior:'smooth'
    })
})

// let getStarted = document.getElementById('get-started');
function loginPage(){
    var loginPage = 'login.html';
    window.open(loginPage);
}
document.getElementById('get-started').addEventListener('click', loginPage);   
