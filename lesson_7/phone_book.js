function solve(myArr) {
    let myObj = {}

    for (let el of myArr) {
        const [key, value] = el.split(' ');
        myObj[key] = value;
    }

    for ([key, value] of Object.entries(myObj)) {
        console.log(`${key} -> ${value}`)
    }
}

solve(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344']
)