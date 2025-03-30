function solve(inStock, ordered) {
    let stockObj = {};

    for (let i = 0; i < inStock.length; i = i + 2) {
        let food = inStock[i];
        let quant = parseInt(inStock[i + 1]);
        stockObj[food] = quant;
    }

    for (let i = 0; i < ordered.length; i = i + 2) {
        let food = ordered[i];
        let quant = parseInt(ordered[i + 1]);
        if (stockObj.hasOwnProperty(food)) {
            stockObj[food] += quant;
        } else {
            stockObj[food] = quant;
        }
    }

    for ([key, value] of Object.entries(stockObj)) {
        console.log(`${key} -> ${value}`);
    }
}

solve(
    [

        'Chips', '5', 'CocaCola', '9', 'Bananas',

        '14', 'Pasta', '4', 'Beer', '2'

    ],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ]
)