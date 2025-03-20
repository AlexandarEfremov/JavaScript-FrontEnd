function solve(speed, area) {
      let result = '';
      let motorway_limit = 130
      let interstate_limit = 90
      let city_limit = 50
      let residential_limit = 20
      let difference = 0
      let status = ''

      if (area == 'motorway') {
            if (speed <= motorway_limit) {
                  console.log(`Driving ${speed} km/h in a ${motorway_limit} zone`);
            } else {
                  difference = speed - motorway_limit
                  result = `The speed is ${difference} km/h faster than the allowed speed of ${motorway_limit}`
                  if (difference <= 20) {
                        status = 'speeding';
                  } else if (difference <= 40) {
                        status = 'excessive speeding';
                  } else {
                        status = 'reckless driving';
                  }

                  console.log(result, `- ${status}`)
            }
      } else if (area == 'interstate') {
            if (speed <= interstate_limit) {
                  console.log(`Driving ${speed} km/h in a ${interstate_limit} zone`);
            } else {
                  difference = speed - interstate_limit
                  result = `The speed is ${difference} km/h faster than the allowed speed of ${interstate_limit}`
                  if (difference <= 20) {
                        status = 'speeding';
                  } else if (difference <= 40) {
                        status = 'excessive speeding';
                  } else {
                        status = 'reckless driving';
                  }

                  console.log(result, `- ${status}`)
            }
      } else if (area == 'city') {
            if (speed <= city_limit) {
                  console.log(`Driving ${speed} km/h in a ${city_limit} zone`);
            } else {
                  difference = speed - city_limit
                  result = `The speed is ${difference} km/h faster than the allowed speed of ${city_limit}`
                  if (difference <= 20) {
                        status = 'speeding';
                  } else if (difference <= 40) {
                        status = 'excessive speeding';
                  } else {
                        status = 'reckless driving';
                  }

                  console.log(result, `- ${status}`)
            }
      } else if (area == 'residential') {
            if (speed <= residential_limit) {
                  console.log(`Driving ${speed} km/h in a ${residential_limit} zone`);
            } else {
                  difference = speed - residential_limit
                  result = `The speed is ${difference} km/h faster than the allowed speed of ${residential_limit}`
                  if (difference <= 20) {
                        status = 'speeding';
                  } else if (difference <= 40) {
                        status = 'excessive speeding';
                  } else {
                        status = 'reckless driving';
                  }

                  console.log(result, `- ${status}`)
            }
      }
}

solve(200, 'motorway')