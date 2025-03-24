function solve(stringA, stringB) {
    let cleanedA = stringA.split(',');
    let cleanedB = stringB.split(' ').join(' ');

    for (let word of cleanedA) {
        let currentWord = word.trim();
        let wordLength = currentWord.length;
        cleanedB = cleanedB.replace("*".repeat(wordLength), currentWord);
    }

    console.log(cleanedB);
}

// solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')