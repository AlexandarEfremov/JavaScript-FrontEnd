function solve(num) {
      let result = 0;
      let toString = num.toString();

      for (let i = 0; i < toString.length; i++) {
            result += parseInt(toString[i]);
      }

      console.log(result);
}

solve(124)