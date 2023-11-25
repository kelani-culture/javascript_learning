// chesssboard

let size = 8;
let count = 0;
for (let i = 0; i < size; i++) {
    let board = ' '
    for (let j =0; j <= size; j++) {
        if (count % 2 == 0) {
            board += '_';
        }
        else {
            board += '#'
        }
        count++;
    }
    console.log(board)
}