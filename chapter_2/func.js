// scope
const halve = function(n) {
    return n/2;
};
let n = 10;
console.log(halve(n))

// nested function
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
    console.log(`${ingredientAmount} ${unit} ${name}`)
    }
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

// declarative function
function future() {
    return "You'll never have flying cars";
}

// Arrow Functions

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result
}
// console.log(power(1, 2))
// arroiw function with one paramenter
const square1 = (x) => {return x * x;};
const square2 = x =>  x * x;

// for aan empty parameter
const horn = () => {
    console.log('Toot');
};

// call stack
function chicken() {
    return egg()
}

function egg()  {
    return chicken()
}

// Optional  arguments
function square(x) { return x*x; }
// console.log(square(4, true, "hedgehog"));

function minus(a, b) {
    sub = b !== undefined ? a - b : -a;
    return sub;
}
// console.log(minus(10))

function powers(base, exponent=2) {
    let result = 1
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

// console.log(powers(4));
// console.log(powers(2, 6));

//Closure

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

// console.log(wrap1());
// console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
// console.log(twice(5));

// rercursion

function power2(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}
// console.log(power2(2, 3))

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                    find(current * 3, `(${history} *  3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(15))