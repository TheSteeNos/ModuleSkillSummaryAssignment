import test from "../../tools/test.mjs";
const tests = test("Cube of Number Test");



function cubeFinder(num) {
    num = +num;
    return num*num*num;
}

tests.isEqual(cubeFinder(4), 64, 'Expects cube of 4 which is 64');
tests.isEqual(cubeFinder(0), 0, 'Expects cube of 0 which is 0');
tests.isEqual(cubeFinder(-4), -64, 'Expects cube of -4 which is -64');
tests.isEqual(cubeFinder('4'), 64, 'Expects to modify strings to integers, expects cube of 4 which is 64');
tests.isNotANumber(cubeFinder('hello world'), 'Expects NaN if input is not a number');
tests.isNotANumber(cubeFinder(NaN), 'Expects NaN if input is not a number');
tests.isEqual(cubeFinder(Infinity), Infinity, 'Expects Infinity');
tests.isEqual(cubeFinder(-Infinity), -Infinity, 'Expects -Infinity');