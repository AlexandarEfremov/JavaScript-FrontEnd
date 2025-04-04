function sum(a, b) {
    alert(a + b);
}

function content(element) {
    element.innerHTML += ' <span class=red>This message comes from the DOM</span>';
}

function edit(reference, match, replace) {
    reference.textContent = reference.textContent.replaceAll(match, replace);
}

function collect() {
    let items = document.getElementsByTagName('li');

    let getText = document.getElementsByTagName('textarea');

    for (let item of items) {
        getText.value += item.textContent;
    }
}