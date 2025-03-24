function solve(text) {
    let newWord = [];
    let startIndex = 0;
    let textLength = text.length;

    for (let i = 1; i < textLength; i++) {
        if (text[i] === text[i].toUpperCase()) {
            newWord.push(text.slice(startIndex, i))
            startIndex = i;
        }

    }
    newWord.push(text.slice(startIndex));
    return newWord.join(', ');
}

console.log(solve('SplitMeOrYouCan'))
// console.log(solve('URLLinksJyeah'))
// console.log(solve('ThisIsSoAnnoyingToDo'))