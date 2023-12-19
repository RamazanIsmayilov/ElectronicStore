const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');
const inputThree = document.querySelector('.inputThree');
const inputFour = document.querySelector('.inputFour');

const funcOne = () => {
    inputOne.classList.add('white');
    inputTwo.className = "inputTwo";
    inputThree.className = "inputThree";
    inputFour.className = "inputFour";
}

const funcTwo = () => {
    inputTwo.classList.add('white');
    inputOne.className = "inputOne";
    inputThree.className = "inputThree";
    inputFour.className = "inputFour";
}

const funcThree = () => {
    inputThree.classList.add('white');
    inputTwo.className = "inputTwo";
    inputOne.className = "inputOne";
    inputFour.className = "inputFour";
}

const funcFour = () => {
    inputFour.classList.add('white');
    inputTwo.className = "inputTwo";
    inputThree.className = "inputThree";
    inputOne.className = "inputOne";
}

inputOne.onclick = funcOne;
inputTwo.onclick = funcTwo;
inputThree.onclick = funcThree;
inputFour.onclick = funcFour;




const form = document.querySelector('.form');
const customAlert = document.querySelector('.custom-alert');
const alertMessage = document.querySelector('.alertMessage');

const showAlert = (message, color) => {
    alertMessage.textContent = message;
    // customAlert.style.backgroundColor = color;
    customAlert.style.display = 'block';

    setTimeout(() => {
        customAlert.style.display = 'none';
    }, 3000);
};

const info = (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#firstname').value;
    const lastName = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;


if (firstName !== "" && lastName !== "" && email === "adminadminov@gmail.com" && password.length > 5 && password.length < 10) {
    showAlert("Login was successful!", '#4CAF50');
} else(
    showAlert("Please enter your information correctly!", '#f44336')
    )   
    firstName.value = "";
};
    
form.addEventListener('submit', info);


