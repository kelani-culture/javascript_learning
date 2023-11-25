// FizzBuzz Game

let i =0;
while (i < 100) {

    if (i  % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizzz');
    }
    else if (i % 5 == 0) {
        console.log('Buzzz');
    }
    else {
        console.log('Just a number')
    }
    i++;
}