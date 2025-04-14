let host = 'http://localhost:3030/jsonstore/reservations';
let addBtn = document.getElementById("add-reservation");
let editBtn = document.getElementById("edit-reservation");

document.getElementById("load-history").addEventListener('click', showReservations);
addBtn.addEventListener('click', onAdd);
editBtn.addEventListener('click', onEdit);
//DOM manipulation

async function showReservations() {
    let data = await getAllReservations();

    let list = document.getElementById('list');
    list.replaceChildren();

    for (let record of data) {
        let changeBtn = create('button', ['Change']);
        changeBtn.addEventListener('click', () => onRecordEdit(record));
        changeBtn.className = 'change-btn';

        let deleteBtn = create('button', ['Done']);
        deleteBtn.addEventListener('click', async () => {
            await deleteReservation(record._id);
            showReservations();
        });
        deleteBtn.className = 'delete-btn';

        let controlDiv = create('div', [
            changeBtn,
            deleteBtn
        ], "buttons-container");

        let element = create('div', [
            create('h2', [record.names]),
            create('h3', [record.date]),
            create('h3', [record.days], "reservation_days"),
            controlDiv
        ]);




        element.className = 'container';
        list.appendChild(element);
    }
}

function onRecordEdit(record) {
    document.getElementById("names").value = record.names;
    document.getElementById("days").value = record.days;
    document.getElementById("date").value = record.date;

    editBtn.dataset.id = record._id;
    addBtn.disabled = true;
    editBtn.disabled = false;
}

async function onAdd() {
    let namesInput = document.getElementById("names");
    let daysInput = document.getElementById("days");
    let dateInput = document.getElementById("date");

    if (!namesInput.value || !daysInput.value || !dateInput.value) {
        return;
    }

    await addReservation(namesInput.value, daysInput.value, dateInput.value);

    namesInput.value = '';
    daysInput.value = '';
    dateInput.value = '';

    showReservations();
}

async function onEdit() {
    let namesInput = document.getElementById("names");
    let daysInput = document.getElementById("days");
    let dateInput = document.getElementById("date");
    let id = editBtn.dataset.id;

    if (!namesInput.value || !daysInput.value || !dateInput.value) {
        return;
    }

    await updateReservation(id, namesInput.value, daysInput.value, dateInput.value);

    namesInput.value = '';
    daysInput.value = '';
    dateInput.value = '';

    addBtn.disabled = false;
    editBtn.disabled = true;
    editBtn.dataset.id = '';

    showReservations();
}

//all functions
async function getAllReservations() {
    let res = await fetch(host);

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

async function addReservation(names, days, date) {
    let record = {
        names,
        days,
        date
    };

    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(host, options);
}

async function deleteReservation(id) {
    let options = {
        method: 'delete'
    };

    await fetch(`${host}/${id}`, options);
}

async function updateReservation(_id, names, days, date) {
    let record = {
        _id,
        names,
        days,
        date
    };

    let options = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    };

    await fetch(`${host}/${_id}`, options)
}

function create(tagName, content, id) {
    let element = document.createElement(tagName);

    if (id) {
        element.id = id;
    }

    for (let child of content) {
        if (typeof child === 'object') {
            element.appendChild(child);
        } else {
            element.appendChild(document.createTextNode(child));
        }
    }

    return element;
}