import test from "../../tools/test.mjs";
const tests = test("Flattening Array Test");

let taskB = [
    6410,
    2831,
    5049,
    7554,
    [
      8707,
      6940,
      9517,
      7565,
      7522,
      9242,
      7972,
      7064,
      3441,
      [
        9960,
        4966,
        9368,
        1634,
        5150,
        3709,
        6660,
        [
          7155, 8056, 7834,
          2639, 6601, 8063,
          2390, 2544, 7022
        ]
      ],
      2385,
      573,
      656,
      733,
      1620,
      3626,
      [
        6274,
        1935,
        [ 6481, 928, 8291, 3196, 3431, 6058 ],
        8010,
        5052,
        892,
        3490,
        2369,
        951,
        1606,
        6763,
        7260,
        6122
      ]
    ],
    5655,
    4223
  ]

function flattenArray(input) {
    if (!Array.isArray(input)) return [];
    let output = [];

    for (let sec of input) {
        if (Array.isArray(sec)) {
            output.push(...flattenArray(sec)); 
        } else {
            output.push(sec);
        } 
    }
    return output;
}

let flattenedTaskB = flattenArray(taskB);
console.log(flattenedTaskB);

tests.arraysAreEqual(flattenArray([1, 2, 3]), [1, 2, 3], 'Expects a flat array to remain unchanged');
tests.arraysAreEqual(flattenArray([1, [2, 3], 4]), [1, 2, 3, 4], 'Expects nested arrays to be flattened');
tests.arraysAreEqual(flattenArray([[1, 2], [3, 4], 5]), [1, 2, 3, 4, 5], 'Expects multiple nested arrays to be flattened');
tests.arraysAreEqual(flattenArray([]), [], 'Expects an empty array to remain empty');
tests.arraysAreEqual(flattenArray([1, [2, [3, [4, 5]]]]), [1, 2, 3, 4, 5], 'Expects deeply nested arrays to be flattened');
tests.arraysAreEqual(flattenArray([[[]], 1, [[2], [[3]]]]), [1, 2, 3], 'Expects empty nested arrays to be ignored');
tests.arraysAreEqual(flattenArray([1, 'a', [2, 'b', [3, 'c']]]), [1, 'a', 2, 'b', 3, 'c'], 'Expects non-number elements to be kept as-is');
tests.arraysAreEqual(flattenArray([null, [undefined, [NaN]]]), [null, undefined, NaN], 'Expects null, undefined, and NaN to be kept as-is');
tests.arraysAreEqual(flattenArray([Infinity, [-Infinity, [5]]]), [Infinity, -Infinity, 5], 'Expects Infinity and -Infinity to be kept');
tests.arraysAreEqual(flattenArray('donALd'), [], 'Expects to return empty array as input is not an array');