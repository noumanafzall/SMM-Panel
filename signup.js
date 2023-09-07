let signupForm = document.getElementById('signupForm');
let uName = document.getElementById('uName');
let email = document.getElementById('email');
let ePass = document.getElementById('ePass');
let cPass = document.getElementById('cPass');
let inputBox = document.getElementById('inputBox')





// Name Field Length validation
const checkLengthName = (field, min, max) => {
    let text = field.value.trim();   //for removing extra spaces
    const small = field.parentNode.querySelector('small');
    if( text === '')
        {
            if(field.parentNode.classList.contains('success'))
                {
                    field.parentNode.classList.remove('success');
                }  
                else{
                field.parentNode.classList.add('error');
                small.innerText = "Name cannot be empty!";
                }
        }
        else if(text.length < min){
            if(field.parentNode.classList.contains('success'))
                {
                    field.parentNode.classList.remove('success');
                }
                field.parentNode.classList.add('error');
                small.innerText = "Name must be greater then 4 characters";
        }
         else if(text.length > max){
            if(field.parentNode.classList.contains('success'))
                {
                    field.parentNode.classList.remove('success');
                }
                field.parentNode.classList.add('error');
                small.innerText = "Name must be less then 12 characters";
        }
        else{
            if(field.parentNode.classList.contains('error'))
                {
                    field.parentNode.classList.remove('error');
                }
                field.parentNode.classList.add('success');
            }

}


// Password Feild Length validation
const checkLengthPassword = (field, min, max) => {
    let text = field.value.trim();   //for removing extra spaces
    const small = field.parentNode.querySelector('small');
    if( text === '')
        {
            if(field.parentNode.classList.contains('success'))
                {
                    field.parentNode.classList.remove('success');
                }  
                else{
                field.parentNode.classList.add('error');
                small.innerText = "Password cannot be empty!";
                }
        }
        else if(text.length < min){
            if(field.parentNode.classList.contains('success'))
                {
                    field.parentNode.classList.remove('success');
                }
                field.parentNode.classList.add('error');
                small.innerText = "Password must be greater then 6 characters";
        }
         else if(text.length > max){
            if(field.parentNode.classList.contains('success'))
                {
                    field.parentNode.classList.remove('success');
                }
                field.parentNode.classList.add('error');
                small.innerText = "Password must be less then 10 characters";
        }
        
        else{
            if(field.parentNode.classList.contains('error'))
                {
                    field.parentNode.classList.remove('error');
                }
                field.parentNode.classList.add('success');
            }

}



const validateEmail = (field) => {
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    const email = field.value.trim(); // Get the trimmed email

    const small = field.parentNode.querySelector('small');
    
    if (email === "") {
        if (field.parentNode.classList.contains('success')) {
            field.parentNode.classList.remove('success');
        }
        field.parentNode.classList.add('error');
        small.innerHTML = "Email cannot be empty!";

    } else if (email.length < 6 || email.length > 20) {
        if (field.parentNode.classList.contains('success')) {
            field.parentNode.classList.remove('success');
        }
        field.parentNode.classList.add('error');
        small.innerHTML = "Email must be between 6 and 20 characters";

    } else if (!regex.test(email)) {
        if (field.parentNode.classList.contains('success')) {
            field.parentNode.classList.remove('success');
        }
        field.parentNode.classList.add('error');
        small.innerHTML = "Invalid email.";

    } else {
        small.innerHTML = "";
        
        if (field.parentNode.classList.contains('error')) {
            field.parentNode.classList.remove('error');
        }
        
        field.parentNode.classList.add('success');
    }
}



//matching passwords
const matchPasswords = (field1, field2) => {
    const password1 = field1.value.trim();
    const password2 = field2.value.trim();
    const small = field2.parentNode.querySelector('small');

    if (password1 === password2) {
        if (field2.parentNode.classList.contains('error')) {
            field2.parentNode.classList.remove('error');
        }
        field2.parentNode.classList.add('success');
        small.innerHTML = "";
    } else {
        if (field2.parentNode.classList.contains('success')) {
            field2.parentNode.classList.remove('success');
        }
        field2.parentNode.classList.add('error');
        small.innerHTML = "Passwords do not match!";
    }
}


// Show and hide password function
const showPassword = document.getElementById('showPassword');

showPassword.addEventListener('change',  (e) => {
    if(showPassword.checked){
        ePass.type='text';
        cPass.type='text';
    }
    else{
        ePass.type='password';
        cPass.type='password';
    }
})





//event listener for register button
const regBtn = document.getElementById('btn');
regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    checkLengthName(uName,4,12);
    validateEmail(email);
    checkLengthPassword(ePass,6,10);
    matchPasswords(ePass,cPass);
    
})