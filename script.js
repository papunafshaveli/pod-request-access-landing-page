const emailForm = document.getElementById("emailsubmition");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("error");
const emailSuccess = document.getElementById("success");
const amptyValue  = document.getElementById("ampty");

emailForm.addEventListener('submit', function(event){

    event.preventDefault()

   
        if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            error.style.display = 'flex';
            emailSuccess.style.display = 'none';
            amptyValue.style.display = 'none';
        }
        if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            error.style.display = 'none';
            amptyValue.style.display = 'none';
            emailSuccess.style.display = 'flex';
        }

        if(email.value == ""){
            amptyValue.style.display = 'flex';
            error.style.display = 'none';
            emailSuccess.style.display = 'none';
        }
})