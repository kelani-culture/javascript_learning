// find minimum value


const min = function (a, b) {
    return a < b || b === undefined ? a : b;
};

console.log(min(3, 2))