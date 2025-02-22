
//Calculating square root using the Babylonian formula

function squareRoot(num){
    if (num < 0) return NaN;
    if (num === 0 || num === 1) return num;

    let x = num;
    let y = (x + num / x) / 2;

    while (x !== y) {
        x = y;
        y = (x + num / x) / 2;
    }

    return y;
}