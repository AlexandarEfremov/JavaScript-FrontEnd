let text = 'JavaScript is the best programming language';
let word = 'javascript';

let refText = text.toLowerCase().split(' ');
let indexMatch = refText.indexOf(word);
console.log(text.split(' ')[indexMatch]);