const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const pswd = document.querySelector('input[name="password"]');


const nameRegex = /^[a-zA-Z ]{2,30}$/;
const emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,5})$/;
const psreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    if (!nameRegex.test(nameInput.value)) {
        alert('Please enter a valid name (2-30 characters, only letters and spaces)');
        return;
    }  
    if (!psreg.test(pswd.value)) {
        alert('Please enter a valid Aadhar number (12 digits)');
        return;
    }
    form.submit();
});