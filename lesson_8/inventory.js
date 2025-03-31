function solve(myArr) {
    let heroesArr = [];

    for (let entry of myArr) {
        let [name, level, items] = entry.split(' / ');
        heroEntry = {
            'Hero:': name,
            'level =>': level,
            'items =>': items
        }
        heroesArr.push(heroEntry);
    }

    heroesArr.sort((a, b) => a['level =>'] - b['level =>']);

    for (let item of heroesArr) {
        for ([key, value] of Object.entries(item)) {
            console.log(key, value);
        }
    }
}

solve(
    [

        'Isacc / 25 / Apple, GravityGun',

        'Derek / 12 / BarrelVest, DestructionSword',

        'Hes / 1 / Desolator, Sentinel, Antara'

    ]
)