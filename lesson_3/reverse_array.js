function solve(number, arr) {
      newArr = arr.splice(0, number).reverse();
      return console.log(newArr.join(' '));
}

solve(4, [-1, 20, 99, 5])