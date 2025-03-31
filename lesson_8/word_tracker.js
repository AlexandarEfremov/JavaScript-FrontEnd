function solve(myArr) {
    let [sentence, ...restWords] = myArr;
    let wordsCheck = sentence.split(' ');

    let collection = [];

    for (let word of wordsCheck) {
        object = {
            name: word,
            count: 0,
        }

        collection.push(object);
    }

    for (let item of collection) {
        for (let word of restWords) {
            if (word === item.name) {
                item.count += 1;
            }
        }
    }

    collection.sort((a, b) => b.count - a.count);

    for (let item of collection) {
        console.log(`${item.name} - ${item.count}`)
    }
}

solve(
    [

        'is the',

        'first', 'sentence', 'Here', 'is',

        'another', 'the', 'And', 'finally', 'the',

        'the', 'sentence']
)