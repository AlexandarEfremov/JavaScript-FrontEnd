function solve(num, op1, op2, op3, op4, op5) {
      array = [op1, op2, op3, op4, op5];
      number = Number(num)
      for (let el of array) {
            if (el == 'chop') {
                  number /= 2;
            } else if (el == 'dice') {
                  number **= 0.5;
            } else if (el == 'spice') {
                  number += 1;
            } else if (el == 'bake') {
                  number *= 3;
            } else if (el == 'fillet') {
                  number *= 0.8;
            }
            console.log(number);
      }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')