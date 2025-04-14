let host = 'http://localhost:3030/jsonstore/orders';

async function getAllOrders() {
    let res = await fetch(host);

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

async function addOrder(name, quantity, date) {
    let record = {
        name,
        quantity,
        date
    };

    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(host, options);
}