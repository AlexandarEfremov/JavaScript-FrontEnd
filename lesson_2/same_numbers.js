function solve(num) {
      let converted = num.toString();
      firstDigit = converted[0];

      result = 'true'
      sum = 0
      for (let i = 0; i < converted.length; i++) {
            if (parseInt(firstDigit) != converted[i]) {
                  result = 'false';
            }
            sum += parseInt(converted[i]);
      }
      console.log(result)
      console.log(sum)
}

solve(1234)