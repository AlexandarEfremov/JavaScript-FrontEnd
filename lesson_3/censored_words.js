function solve(text, word) {
    let result = text.replaceAll(word, '*'.repeat(word.length));
    console.log(result);
}

solve('Find the hidden word', 'hidden')