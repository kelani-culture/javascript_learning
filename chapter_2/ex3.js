// get the Nth charactr or letter from a string [N]


function countBs(str) {
    str = String(str);
    const upperCaseB = "B";

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === upperCaseB) {
            count++;
        }
    }
    return count;
}

function countChar(str, char) {
    str = String(str);
    
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) count++;
    }
    return count;
}
console.log(countBs("BigBigBig"));
console.log(countChar("MacMac", "M"));