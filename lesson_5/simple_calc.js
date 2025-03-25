function solve(op1, op2, string) {
    const val = {
        "multiply": op1 * op2,
        "divide": op1 / op2,
        "add": op1 + op2,
        "subtract": op1 - op2,
    }

    return val[string];
}

console.log(solve(50, 20, "subtract"))