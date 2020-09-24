const addOne = document.getElementById('inputAdd1')
const addTwo = document.getElementById('inputAdd2')
const addButton = document.getElementById('add')
const addAnswer = document.getElementById('addOutput')

addButton.addEventListener('click', () => {
    
    const sum = Number(addOne.value) + Number(addTwo.value);

    addAnswer.textContent = sum
    console.log("click");
})

const subOne = document.getElementById('inputSub1')
const subTwo = document.getElementById('inputSub2')
const subButton = document.getElementById('subtract')
const subAnswer = document.getElementById('subOutput')

subButton.addEventListener('click', () => {
    
    const difference = Number(subOne.value) - Number(subTwo.value);

    subAnswer.textContent = difference
    console.log("click");
})

const mulOne = document.getElementById('inputMul1')
const mulTwo = document.getElementById('inputMul2')
const mulButton = document.getElementById('multiply')
const mulAnswer = document.getElementById('mulOutput')

mulButton.addEventListener('click', () => {
    
    const product = Number(mulOne.value) * Number(mulTwo.value);

    mulAnswer.textContent = product
    console.log("click");
})

const divOne = document.getElementById('inputDiv1')
const divTwo = document.getElementById('inputDiv2')
const divButton = document.getElementById('divide')
const divAnswer = document.getElementById('divOutput')

divButton.addEventListener('click', () => {
    
    const quotient = Number(divOne.value) / Number(divTwo.value);

    divAnswer.textContent = quotient
    console.log("click");
})