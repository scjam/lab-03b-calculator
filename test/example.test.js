// IMPORT MODULES under test here:
 import { add, subtract, multiply, divide } from '../utils.js';

const test = QUnit.test;

test('add should take 5 and 4 and return 9', (expect) => {

    const input1 = 5;
    const input2 = 4;
    const expected = 9;
    
    const actual = add(input1, input2);

    expect.equal(actual, expected);
});

test('sub should take 5 and 4 and return 1', (expect) => {

    const input1 = 5;
    const input2 = 4;
    const expected = 1;
    
    const actual = subtract(input1, input2);

    expect.equal(actual, expected);
});

test('sub should take 5 and 4 and return 20', (expect) => {

    const input1 = 5;
    const input2 = 4;
    const expected = 20;
    
    const actual = multiply(input1, input2);

    expect.equal(actual, expected);
});

test('sub should take 5 and 4 and return 1.25', (expect) => {

    const input1 = 5;
    const input2 = 4;
    const expected = 1.25;
    
    const actual = divide(input1, input2);

    expect.equal(actual, expected);
});