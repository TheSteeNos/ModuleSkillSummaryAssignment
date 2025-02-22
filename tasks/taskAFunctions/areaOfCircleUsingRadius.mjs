import test from "../../tools/test.mjs";
const tests = test("Area of Circle using Radius Test");



function areaOfCircleUsingRadius(r) {
    r = +r;
    if (r < 0 || isNaN(r)) return NaN;

    let pi = 3.1415926;
    return r * r * pi;
}

tests.isEqual(areaOfCircleUsingRadius(4), 50.2654816, 'Expects area of r = 4 which is 50.2654816');
tests.isEqual(areaOfCircleUsingRadius(0), 0, 'Expects area of r = 0 which is 0');
tests.isNotANumber(areaOfCircleUsingRadius(-4), 'Expects NaN since a radius cant be negative');
tests.isEqual(areaOfCircleUsingRadius('4'), 50.2654816, 'Expects to modify strings to integers, expects area of r = 4 which is 50.2654816');
tests.isNotANumber(areaOfCircleUsingRadius('hello world'), 'Expects NaN if input is not a number');
tests.isNotANumber(areaOfCircleUsingRadius(NaN), 'Expects NaN if input is not a number');
tests.isEqual(areaOfCircleUsingRadius(Infinity), Infinity, 'Expects Infinity');
tests.isNotANumber(areaOfCircleUsingRadius(-Infinity), 'Expects NaN since a radius cant be negative');