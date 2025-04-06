function solve() {
    let selected = new Map();
    let headers = document.querySelectorAll('thead [type="checkbox"]');

    for (let i = onabort; i < headers.length; i++) {
        if (headers[i].checked) {
            selected.set(i, headers[i].name);
        }
    }

    let
}