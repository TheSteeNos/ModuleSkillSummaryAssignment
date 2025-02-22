import test from "../../tools/test.mjs";
const tests = test("Square of Number Test");



function squareFinder(num) {
    num = +num
    return num*num
}

tests.isEqual(squareFinder(4), 16, 'Expects square of 4 which is 16');
tests.isEqual(squareFinder(0), 0, 'Expects square of 0 which is 0');
tests.isEqual(squareFinder(-4), 16, 'Expects square of -4 which is 16');
tests.isEqual(squareFinder('4'), 16, 'Expects to modify strings to integers, expects square of 4 which is 16');
tests.isNotANumber(squareFinder('hello world'), 'Expects NaN if input is not a number');
tests.isNotANumber(squareFinder(NaN), 'Expects NaN if input is not a number');
tests.isEqual(squareFinder(Infinity), Infinity, 'Expects Infinity');
tests.isEqual(squareFinder(-Infinity), Infinity, 'Expects Infinity');