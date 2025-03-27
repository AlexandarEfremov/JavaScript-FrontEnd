function solve(password) {
    let errors = [];
    let pattern = /^[a-z0-9]+$/i;
    let pattern2 = /\d.*\d/;

    if (password.length < 6 || password.length > 10) {
        errors.push("Password must be between 6 and 10 characters");
    }
    if (!pattern.test(password)) {
        errors.push("Password must consist only of letters and digits");
    }
    if (!pattern2.test(password)) {
        errors.push("Password must have at least 2 digits");
    }


    if (errors.length) {
        return errors.join('\n');
    } else {
        return "Password is valid";
    }
}

console.log(solve('Pa$s$s'))