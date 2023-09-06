let signupForm = document.getElementById('signupForm');
let uName = document.getElementById('uName');
let email = document.getElementById('email');
let ePass = document.getElementById('ePass');
let cPass = document.getElementById('cPass');
let inputBox = document.getElementById('inputBox')





// Name Feild Length validation
const checkLengthName = (field, min, max) => {
    let text = field.value.trim();   //for removing extra spaces
    if( text === '')
        {
            if(inputBox.classList.contains('success'))
                {
                    inputBox.classList.remove('success');
                }  
                inputBox.classList.add('error');
                errorMsg.innerText = "please enter name";
        }
         else if(text < min){
            if(inputBox.classList.contains('success'))
                {
                    inputBox.classList.remove('success');
                }
                inputBox.classList.add('error');
                errorMsg.innerText = "please enter name";
        }
         else if(text > max){
            if(inputBox.classList.contains('success'))
                {
                    inputBox.classList.remove('success');
                }
                inputBox.classList.add('error');
                errorMsg.innerText = "please enter name";
        }
        else{
            if(inputBox.classList.contains('error'))
                {
                    inputBox.classList.remove('error');
                }
                inputBox.classList.add('success')
            }

}


const checkLengthEmail = (field, min, max) => {
    let text = field.value.trim();   //for removing extra spaces
    if( text === '')
        {
            if(inputBox.classList.contains('success'))
                {
                    inputBox.classList.remove('success');
                }  
                inputBox.classList.add('error');
                errorMsg.innerText = "please enter name";
        }
         else if(text < min){
            if(inputBox.classList.contains('success'))
                {
                    inputBox.classList.remove('success');
                }
                inputBox.classList.add('error');
                errorMsg.innerText = "please enter name";
        }
         else if(text > max){
            if(inputBox.classList.contains('success'))
                {
                    inputBox.classList.remove('success');
                }
                inputBox.classList.add('error');
                errorMsg.innerText = "please enter name";
        }
        else{
            if(inputBox.classList.contains('error'))
                {
                    inputBox.classList.remove('error');
                }
                inputBox.classList.add('success')
        } }





//event listener for register button
const regBtn = document.getElementById('btn');
regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    checkLengthName(uName,4,12);
    checkLengthEmail(email,4,15);
    
})