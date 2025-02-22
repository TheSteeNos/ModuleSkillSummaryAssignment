import test from "../../tools/test.mjs";
const tests = test("Conversion from Inch to Millimeter test");



function inchToMm(inch) {
    inch = +inch;
    return (inch*25.4);
}

tests.isEqual(inchToMm(11), 279.4, 'Expects to convert 11 inches to 279.4 millimeters');
tests.isEqual(inchToMm(0), 0, 'Expects to convert 0 inches to 0 millimeters');
tests.isEqual(inchToMm(-16), -406.4, 'Expects to convert -16 inches to -406.4 millimeters');
tests.isEqual(inchToMm('11'), 279.4, 'Expects to modify strings to integers, then convert 11 inches to 279.4 millimeters');
tests.isNotANumber(inchToMm('hello world'), 'Expects NaN if input is not a number');
tests.isNotANumber(inchToMm(NaN), 'Expects NaN if input is NaN');
tests.isEqual(inchToMm(Infinity), Infinity, 'Expects Infinity');
tests.isEqual(inchToMm(-Infinity), -Infinity, 'Expects -Infinity');