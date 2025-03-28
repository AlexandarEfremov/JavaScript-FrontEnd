function solve(myObj) {
    let keys = Object.keys(myObj);

    for (let key of keys) {
        console.log(key, '->', myObj[key]);
    }
}

solve({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000" })