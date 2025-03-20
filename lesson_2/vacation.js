function price_calc(num, group, day) {
      let price;
      let discount = 1;

      if (group == 'Students') {
            if (num >= 30) {
                  discount = 0.85
            }
            if (day == 'Friday') {
                  price = 8.45
            } else if (day == 'Saturday') {
                  price = 9.80
            } else if (day == 'Sunday') {
                  price = 10.46
            }
      } else if (group == 'Business') {
            if (num >= 100) {
                  num -= 10
            }
            if (day == 'Friday') {
                  price = 10.90
            } else if (day == 'Saturday') {
                  price = 15.60
            } else if (day == 'Sunday') {
                  price = 16
            }
      } else if (group == 'Regular') {
            if (10 <= num && num <= 20) {
                  discount = 0.95
            }
            if (day == 'Friday') {
                  price = 15
            } else if (day == 'Saturday') {
                  price = 20
            } else if (day == 'Sunday') {
                  price = 22.50
            }
      }

      let result = ((price * num) * discount).toFixed(2)
      console.log(`Total price: ${result}`)
}

price_calc(80, 'Regular', 'Sunday')