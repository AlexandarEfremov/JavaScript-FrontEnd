function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');

    if (button.textContent == 'More') {
        button.textContent = 'Less';
        extra.style.display = "block";
    } else if (button.textContent == 'Less') {
        button.textContent = 'More';
        extra.style.display = "none";
    }
}