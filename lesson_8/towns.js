function solve(myArr) {
    let newObj = {};

    for (let el of myArr) {
        let [name, latitude, longitude] = el.split(' | ');
        let newLat = parseFloat(latitude).toFixed(2);
        let newLon = parseFloat(longitude).toFixed(2);
        newObj = {
            "town": name,
            "latitude": newLat,
            "longitude": newLon
        };
        console.log(newObj);
    }
}

solve(
    ['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']
)