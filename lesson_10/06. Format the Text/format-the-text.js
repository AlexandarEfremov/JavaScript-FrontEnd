function solve() {
  let textArea = document.getElementById("input").value;
  let sent = textArea.split('.').filter(s => s.trim() !== '');

  let res = [];

  for (let i = 0; i < sent.length; i += 3) {
    let parSent = sent.slice(i, i + 3).map(s => s.trim() + '.').join(' ');
    let paragraph = `<p>${parSent}</p>`;
    res.push(paragraph);
  }

  document.getElementById('output').innerHTML = res.join('\n');
}