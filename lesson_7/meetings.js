function solve(myArr) {
    let meetingObj = {};

    for (let el of myArr) {
        let [day, pers] = el.split(' ')
        if (!meetingObj.hasOwnProperty(day)) {
            meetingObj[day] = pers
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for ([key, value] of Object.entries(meetingObj)) {
        console.log(`${key} -> ${value}`)
    }
}

solve(
    ['Monday Peter',

        'Wednesday Bill',

        'Monday Tim',

        'Friday Tim']
)