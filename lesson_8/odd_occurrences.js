function solve(myArr) {
    let words = myArr.toLowerCase().split(' ');
    let uniqueWords = [...new Set(words)]

    let collection = [];
    for (let word of uniqueWords) {
        object = {
            name: word,
            count: 0,
        }

        collection.push(object);
    }

    for (let item of collection) {
        for (let w of words) {
            if (item.name === w) {
                item.count += 1;
            };
        };
    };

    let newArr = collection.filter((n) => n.count % 2 != 0);

    for (let item of newArr) {
        process.stdout.write(`${item.name} `)
    }
}

solve(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)