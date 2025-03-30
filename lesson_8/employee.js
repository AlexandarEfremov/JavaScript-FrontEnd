function solve(myArr) {
    const empObj = {};
    for (let person of myArr) {
        let persNum = person.length;
        empObj[person] = persNum;
    }

    for ([key, value] of Object.entries(empObj)) {
        console.log(`Name: ${key} -- Personal Number: ${value}`)
    }
}

solve(
    [

        'Silas Butler',

        'Adnaan Buckley',

        'Juan Peterson',

        'Brendan Villarreal'

    ]
)