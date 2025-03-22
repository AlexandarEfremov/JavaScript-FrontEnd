function solve(number, arr) {
      let myArr = arr;
      let firstDigit = myArr.shift();
      let lastDigit = myArr.pop();
      return console.log(firstDigit + lastDigit);
}

solve([20, 30, 40])