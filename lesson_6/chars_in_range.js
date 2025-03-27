function solve(char1, char2) {
    let charAsc1 = char1.charCodeAt(0);
    let charAsc2 = char2.charCodeAt(0);
    let charArr = [];

    if (charAsc1 < charAsc2) {
        for (let i = charAsc1 + 1; i < charAsc2; i++) {
            charArr.push(String.fromCharCode(i))
        }
    } else {
        for (let i = charAsc2 + 1; i < charAsc1; i++) {
            charArr.push(String.fromCharCode(i))
        }
    }
    return charArr.join(' ');
}

console.log(solve('a', 'd'))
console.log(solve('#', ':'))
console.log(solve('C', '#'))