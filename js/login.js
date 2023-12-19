const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');

const funcOne = () => {
    inputOne.classList.add('white');
    inputTwo.className = "inputOne";
}

const funcTwo = () => {
    inputTwo.classList.add('white');
    inputOne.className = "inputTwo";
}

inputOne.onclick = funcOne;
inputTwo.onclick = funcTwo;






// const mercedes = document.querySelector(".mercedes")
// const bmw = document.querySelector(".bmw")
// const audi = document.querySelector(".audi")
// const toyota = document.querySelector(".toyota")

// const mercedesFunc =()=>{

//     mercedes.classList.add("green")

//     toyota.className="toyota"
//     bmw.className="bmw"
//     audi.className="audi"
    
// }

// const bmwFunc =()=>{

//   bmw.classList.add("green")

//   toyota.className="toyota"
//   mercedes.className="bmw"
//   audi.className="audi"
  
// }

// const audiFunc =()=>{

//   audi.classList.add("green")

//   toyota.className="toyota"
//   mercedes.className="bmw"
//   bmw.className="audi"
  
// }

// const toyotaFunc = ()=>{

//     toyota.classList.add("green")

//     mercedes.className="mercedes"
//     bmw.className="bmw"
//     audi.className="audi"
// }

// mercedes.onclick = mercedesFunc;
// bmw.onclick = bmwFunc;
// audi.onclick = audiFunc;
// toyota.onclick = toyotaFunc;