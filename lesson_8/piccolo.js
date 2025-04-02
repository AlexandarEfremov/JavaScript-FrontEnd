function solve(myArr) {
    let parked = new Set();

    for (let row of myArr) {
        let [command, id] = row.split(', ');

        if (command == 'IN') {
            parked.add(id);
        } else if (command == 'OUT') {
            parked.delete(id);
        }
    }

    if (parked.size) {
        console.log([...parked].sort().join('\n'));
    } else {
        console.log('Parking Lot is empty');
    }

}

solve(
    ['IN, CA2844AA',

        'IN, CA1234TA',

        'OUT, CA2844AA',

        'IN, CA9999TT',

        'IN, CA2866HI',

        'OUT, CA1234TA',

        'IN, CA2844AA',

        'OUT, CA2866HI',

        'IN, CA9876HH',

        'IN, CA2822UU']
)