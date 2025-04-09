window.addEventListener("load", solve);

function solve() {
  let submitBtn = document.getElementById('next-btn');
  let form = document.querySelector('.registerEvent');
  let emailInput = document.getElementById('email');
  let eventInput = document.getElementById('event');
  let locationInput = document.getElementById('location');

  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(ev) {
    ev.preventDefault();

    let email = emailInput.value;
    let event = eventInput.value;
    let location = locationInput.value;

    if (!email || !event || !location) {
      return;
    }

    let result = create('li', []);
    result.className = 'application';

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = email;

    let pEvent = document.createElement('p');
    pEvent.innerHTML = `<strong>Event:</strong><br>${event}`;

    let pLocation = document.createElement('p');
    pLocation.innerHTML = `<strong>Location:</strong><br>${location}`;

    article.appendChild(h4);
    article.appendChild(pEvent);
    article.appendChild(pLocation);
    result.appendChild(article);

    let editBtn = create('button', ['edit']);
    editBtn.className = 'action-btn edit';
    editBtn.addEventListener('click', () => onEdit(email, event, location));

    let applyBtn = create('button', ['apply']);
    applyBtn.className = 'action-btn apply';
    applyBtn.addEventListener('click', () => onApply(result, editBtn, applyBtn));

    result.appendChild(editBtn);
    result.appendChild(applyBtn);

    document.getElementById('preview-list').appendChild(result);
    form.reset();
    submitBtn.disabled = true;
  }

  function onEdit(email, event, location) {
    emailInput.value = email;
    eventInput.value = event;
    locationInput.value = location;

    document.getElementById('preview-list').innerHTML = '';
    submitBtn.disabled = false;
  }

  function onApply(element, editBtn, applyBtn) {
    editBtn.remove();
    applyBtn.remove();
    document.getElementById('event-list').appendChild(element);
    submitBtn.disabled = false;
  }

  function create(tagName, content) {
    let element = document.createElement(tagName);

    for (let child of content) {
      if (typeof child === 'object') {
        element.appendChild(child);
      } else {
        element.appendChild(document.createTextNode(child));
      }
    }

    return element;
  }
}
