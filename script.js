let scrollDown = document.getElementById('see-more');
scrollDown.addEventListener('click' , (e) => {
    window.scroll({
        top:650,
        behavior:'smooth'
    })
})