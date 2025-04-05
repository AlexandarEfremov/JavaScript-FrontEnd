function solve() {
  let text = document.getElementById("text").value;
  let resultToLower = text.toLowerCase().split(' ');
  let tpyingCase = document.getElementById("naming-convention").value;
  let output = '';

  if (tpyingCase == 'Camel Case') {
    counter = 0;
    for (let word of resultToLower) {
      if (counter > 0) {
        word = word.replace(word[0], word[0].toUpperCase());
        output += word;
      } else {
        output += word;
      }
      counter++
    }
  } else if (tpyingCase == 'Pascal Case') {
    for (let word of resultToLower) {
      word = word.replace(word[0], word[0].toUpperCase());
      output += word;
    }
  } else {
    output = 'Error!'
  }

  let result = document.getElementById("result")
  result.textContent = output;
}