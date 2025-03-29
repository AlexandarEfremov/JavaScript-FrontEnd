function solve(myArr) {
    let addressBook = {};

    for (let element of myArr) {
        let [name, address] = element.split(':');
        addressBook[name] = address;
    }

    const sortedObj = Object.entries(addressBook)
    sortedObj.sort((a, b) => a[0].localeCompare(b[0]))

    for (value of Object.values(sortedObj)) {
        let [n, a] = value
        console.log(`${n} -> ${a}`);
    }
}

solve(
    [
        'Tim:Doe Crossing',

        'Bill:Nelson Place',

        'Peter:Carlyle Ave',

        'Bill:Ornery Rd'
    ]
)