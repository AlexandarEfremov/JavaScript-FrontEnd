function solve(word, text) {

    let refText = text.toLowerCase().split(' ');
    let indexMatch = refText.indexOf(word);

    if (indexMatch != -1) {
        return word;
    } else {
        return `${word} not found!`;
    }
}

console.log(solve('python', 'JavaScript is the best programming language'))
console.log(solve('javascript', 'JavaScript is the best programming language'))