function solve(num1, num2) {
      let array = [];
      let result = 0;

      for (let i = num1; i <= num2; i++) {
            array.push(i)
            result += i
      }

      console.log(array.join(' '));
      console.log(`Sum: ${result}`)
}

solve(0, 26)