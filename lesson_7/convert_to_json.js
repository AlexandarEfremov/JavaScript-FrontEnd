function solve(name, lastName, hairColor) {
    let person = JSON.stringify({ name: name, lastName: lastName, hairColor: hairColor });
    return person;
}

console.log(solve('George', 'Jones', 'Brown'))