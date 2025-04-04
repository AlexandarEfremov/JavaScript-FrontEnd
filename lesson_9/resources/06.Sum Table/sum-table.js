function sumTable() {
    let allTrs = document.querySelectorAll('tbody tr td');
    let first = parseFloat(allTrs[1].textContent);
    let second = parseFloat(allTrs[3].textContent);
    let third = parseFloat(allTrs[5].textContent);

    let sum = allTrs[7];

    let output = first + second + third;
    sum.textContent = output
}