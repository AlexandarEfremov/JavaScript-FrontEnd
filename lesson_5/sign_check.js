function solve(...nums) {
    let myArr = [...nums];
    let newArr = myArr.map((x) => x > 0);

    let counter = 0
    for (let element of newArr) {
        if (element == false) {
            counter += 1;
        }
    }

    if (counter % 2 == 0) {
        return 'Positive';
    } else {
        return 'Negative';
    }
}

console.log(solve(-5,

    1,

    1))