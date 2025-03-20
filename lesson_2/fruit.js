function solve(fruit, weight, price) {
      let money = ((weight * price) / 1000).toFixed(2)
      let new_weight = (weight / 1000).toFixed(2)
      console.log(`I need $${money} to buy ${new_weight} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35)