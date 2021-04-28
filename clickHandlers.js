import { 
    add, 
    subtract, 
    multiply, 
    divide 
} from './utils.js';

const inputOne = document.getElementById('input1');
const inputTwo = document.getElementById('input2');
const answer = document.getElementById('output');
const dropdown = document.getElementById('operations');

export function handleClick() {
    
if (dropdown.value === "add") {
        
    const calcOutput = Number(inputOne.value) + Number(inputTwo.value);

    answer.textContent = calcOutput

} else if (dropdown.value === "subtract") {
    
    const calcOutput = Number(inputOne.value) - Number(inputTwo.value);

    answer.textContent = calcOutput

} else if (dropdown.value === "multiply") {
    
    const calcOutput = Number(inputOne.value) * Number(inputTwo.value);

    answer.textContent = calcOutput

} else if (dropdown.value === "divide") {
    
    const calcOutput = Number(inputOne.value) / Number(inputTwo.value);

    answer.textContent = calcOutput
    }

};
