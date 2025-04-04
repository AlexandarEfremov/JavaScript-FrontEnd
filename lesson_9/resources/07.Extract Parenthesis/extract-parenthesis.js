function extract(content) {
    let pattern = /\((.+?)\)/gm;
    let element = document.getElementById(content);
    let text = element.textContent;

    let result = []
    let match = pattern.exec(text);

    while (match) {
        result.push(match[1]);
        match = pattern.exec(text);
    }

    return result.join('; ');
}