// check if a number is even

function isEven(num) {
    if (num < 0) {
        return isEven(-num)
    }
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    }
    return isEven(num - 2);
}

console.log(isEven(-1));