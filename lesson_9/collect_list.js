function collect() {
    let items = document.getElementsByTagName('li');

    let getText = document.getElementsByTagName('textarea');

    for (let item of items) {
        getText.value += item.textContent;
    }
}