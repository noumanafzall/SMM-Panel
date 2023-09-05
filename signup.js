// Event Listener of Register Button
const signupForm = document.getElementById('btn');
signupForm.addEventListener('click' , (e) => {
    e.preventDefault();
    checkLength(ePass, 3, 8)
})

// For Error Msgs
let inputBox = document.getElementsByClassName('input-box');



// SignUp form validation
const uName = document.getElementById('uName');
const email = document.getElementById('email');
const ePass = document.getElementById('ePass');
const cPass = document.getElementById('cPass');



const checkLength = (field,min,max) => {
    const text = field.value.trim();
    if(text.length < min) {
        if(!field.parentNode.classList.contains('error'))
            field.parentNode.classList.add('error')
            return;
    }
    if(text.length > max) {
        if(!field.parentNode.classList.contains('error'))
            field.parentNode.classList.add('error')
            return;
    }
    if(field.parentNode.classList.contains('error'))
    field.parentNode.classList.remove('error')
    if(!field.parentNode.classList.contains('success'))
    field.parentNode.classList.add('success')

}

