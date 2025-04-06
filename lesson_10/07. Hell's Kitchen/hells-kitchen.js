function solve() {
    let textArea = document.getElementsByTagName('textarea')[0];
    let entries = textArea.textContent;
    let jsonEntries = JSON.parse(entries);

    let myObj = {};

    for (let entries of jsonEntries) {
        let [restaurant, workers] = entries.split(' - ');
        workers = workers.split(', ');
        for (let i of workers) {
            let [worker, salary] = i.split(' ');
            myObj[restaurant] = {
                [worker]: salary,
            }
        }
    }

    for (let entry of Object.entries(myObj)) {
        console.log(entry);
    }
}