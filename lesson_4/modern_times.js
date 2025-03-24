function solve(initialStr) {
    let newArr = initialStr.split(' ');
    let matches = [];
    let regExp = /\d/g;

    for (let el of newArr) {
        if (el.startsWith("#") && el.length > 1) {
            let newEl = el.slice(1);

            if (!regExp.test(newEl)) {
                matches.push(newEl);
            }
        }
    }

    console.log(matches.join('\n'));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol #12d3 is known #variously in English - speaking #regions as the #number sign')