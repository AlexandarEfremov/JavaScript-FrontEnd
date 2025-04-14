window.addEventListener("load", solve);

function solve() {
    const eventInput = document.getElementById('event');
    const noteInput = document.getElementById('note');
    const dateInput = document.getElementById('date');
    const saveBtn = document.getElementById('save');
    const upcomingList = document.getElementById('upcoming-list');
    const eventsList = document.getElementById('events-list');
    const deleteBtn = document.querySelector('.btn.delete');

    let editedEventItem = null;

    saveBtn.addEventListener('click', () => {
        const eventName = eventInput.value.trim();
        const note = noteInput.value.trim();
        const date = dateInput.value;

        if (!eventName || !note || !date) {
            return;
        }

        if (editedEventItem) {
            editedEventItem.remove();
            editedEventItem = null;
        }

        const li = document.createElement('li');
        li.className = 'event-item';

        const container = document.createElement('div');
        container.className = 'event-container';

        const article = document.createElement('article');

        const pName = document.createElement('p');
        pName.textContent = `Name: ${eventName}`;
        article.appendChild(pName);

        const pNote = document.createElement('p');
        pNote.textContent = `Note: ${note}`;
        article.appendChild(pNote);

        const pDate = document.createElement('p');
        pDate.textContent = `Date: ${date}`;
        article.appendChild(pDate);

        container.appendChild(article);

        const btnDiv = document.createElement('div');
        btnDiv.className = 'buttons';

        const editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.className = 'btn done';
        doneBtn.textContent = 'Done';

        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(doneBtn);
        container.appendChild(btnDiv);

        li.appendChild(container);

        upcomingList.appendChild(li);

        eventInput.value = '';
        noteInput.value = '';
        dateInput.value = '';
    });

    upcomingList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('edit')) {
            const eventItem = e.target.closest('.event-item');
            const eventName = eventItem.querySelector('article p:nth-child(1)').textContent.replace('Name: ', '');
            const note = eventItem.querySelector('article p:nth-child(2)').textContent.replace('Note: ', '');
            const date = eventItem.querySelector('article p:nth-child(3)').textContent.replace('Date: ', '');

            eventInput.value = eventName;
            noteInput.value = note;
            dateInput.value = date;

            eventItem.remove();

            editedEventItem = eventItem;
        }
    });

    upcomingList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('done')) {
            const eventItem = e.target.closest('.event-item');

            const btnDiv = eventItem.querySelector('.buttons');
            btnDiv.remove();

            eventsList.appendChild(eventItem);
        }
    });

    deleteBtn.addEventListener('click', () => {
        while (eventsList.firstChild) {
            eventsList.removeChild(eventsList.firstChild);
        }
    });
}


