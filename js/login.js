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

