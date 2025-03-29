function solve(jsonString) {
    let text = JSON.parse(jsonString);
    for (const [key, value] of Object.entries(text)) {
        console.log(`${key}: ${value}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')
