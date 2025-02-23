
function test(description) {

    console.log(description);

    return {
        isEqual,
        isNotANumber,
        doesNotThrowError,
        isInRange,
        arraysAreEqual
    }
}

function doesNotThrowError(testFunction, description) {

    try {
        testFunction();
        console.log(`🟢 ${description}`);
    } catch (error) {
        console.log(error);
        console.log(`🔴 ${description}`)
    }

}


function isInRange(received, expectedLowerBound, expectedUpperBound, description) {

    if (received >= expectedLowerBound && received <= expectedUpperBound) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Expected ${expected}, received ${received}`);
    }
}

function isNotANumber(received, description) {
    if (isNaN(received)) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. received ${received}`);
    }
}

function isEqual(received, expected, description) {

    if (received === expected) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Expected ${expected}, received ${received}`);
    }

}

function arraysAreEqual(received, expected, description) {
    function arraysAreEqualCheck(arr1, arr2) {
        if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
            return false;
        }

        return arr1.every((val, index) => {
            if (Array.isArray(val) && Array.isArray(arr2[index])) {
                return arraysAreEqualCheck(val, arr2[index]);
            }
            if (Number.isNaN(val) && Number.isNaN(arr2[index])) {
                return true;
            }
            return val === arr2[index];
        });
    }

    if (arraysAreEqualCheck(received, expected)) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Expected ${JSON.stringify(expected)}, received ${JSON.stringify(received)}`);
    }
}

export default test