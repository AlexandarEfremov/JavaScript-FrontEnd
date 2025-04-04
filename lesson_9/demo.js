function sum(a, b) {
    alert(a + b);
}

function content(element) {
    element.innerHTML += ' <span class=red>This message comes from the DOM</span>';
}

function edit(reference, match, replace) {
    reference.textContent = reference.textContent.replaceAll(match, replace);
}