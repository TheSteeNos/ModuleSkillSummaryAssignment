import test from "../../tools/test.mjs";
const tests = test("Multiplication test");


//Calculating square root using the Babylonian formula

function squareRoot(num){
    num = +num
    if (num < 0 || isNaN(num)) return NaN;
    if (num === 0 || num === 1) return num;
    if (num === Infinity) return Infinity;
    if (num === -Infinity) return NaN;

    let x = num;
    let y = (x + num / x) / 2;

    while (x !== y) {
        x = y;
        y = (x + num / x) / 2;
    }

    return y;
}

tests.isEqual(squareRoot(16), 4, 'Expects square root of 16 which is 4');
tests.isEqual(squareRoot(0), 0, 'Expects 0 if input is 0');
tests.isEqual(squareRoot(-16), NaN, 'Expects NaN, as there is no square root of a negative number');
tests.isEqual(squareRoot('16'), 4, 'Expects to modify strings to integers, then multiply, expects 540');
tests.isNotANumber(squareRoot('hello world'), 'Expects NaN if input is not a number');
tests.isNotANumber(squareRoot(NaN, 3, 5, 9), 'Expects NaN if input is NaN');
tests.isEqual(squareRoot(Infinity), Infinity, 'Expects Infinity');
tests.isEqual(squareRoot(-Infinity), NaN, 'Expects NaN, as there is no square root of a negative number');