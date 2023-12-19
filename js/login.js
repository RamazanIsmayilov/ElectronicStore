const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');

const funcOne = () => {
    inputOne.classList.add('white');
    inputTwo.className = "inputTwo";
}

const funcTwo = () => {
    inputTwo.classList.add('white');
    inputOne.className = "inputOne";
}

inputOne.onclick = funcOne;
inputTwo.onclick = funcTwo;



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
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === 'adminadminov@gmail.com' && password === '123456789') {
        showAlert("Enter was successful!", '#4CAF50');
    } else(
        showAlert("Please enter your information correctly!", '#f44336')
    )   
}

form.addEventListener('submit', info);

