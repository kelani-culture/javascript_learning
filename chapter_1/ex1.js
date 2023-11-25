// looping a triangle

const num = 7;
for (let i =1; i <= num; i++) {
    let row = '';
    for(let j = 0; j < i; j++) {
        row += '#'
    }
    console.log(row);
}