function solve(myArr) {
    let objects = {};

    for (let el of myArr) {
        let json = JSON.parse(el);

        for ([key, value] of Object.entries(json)) {
            objects[key] = value;
        }
    }

    let sortedEntries = Object.entries(objects).sort((a, b) => a[0].localeCompare(b[0]));

    for ([key, value] of sortedEntries) {
        console.log(`Term: ${key} => Definition: ${value}`)
    }

}
solve(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
)