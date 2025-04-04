function extractText() {
    let liItems = document.getElementsByTagName('li');

    let texty = document.getElementById('result');

    for (let node of liItems) {
        texty.value += node.textContent + '\n';
    }
}