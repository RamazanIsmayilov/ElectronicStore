const input = document.querySelector('.input');

const funcInput = () => {
    input.classList.add('white');
}

input.onclick = funcInput;


const form = document.querySelector('.form');
const customAlert = document.querySelector('.custom-alert');
const alertMessage = document.querySelector('.alertMessage');

const showAlert = (message, color) => {
    alertMessage.textContent = message;
    customAlert.style.backgroundColor = color;
    customAlert.style.display = 'block';

    setTimeout(() => {
        customAlert.style.display = 'none';
    }, 3000);
}

const info = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email');

    if (email.value === 'adminadminov@gmail.com') {
        showAlert("An email notification has been sent!", '#4CAF50');
    } else(
        showAlert("Please enter your email correctly!", '#f44336')
    )   
}

form.addEventListener('submit', info);