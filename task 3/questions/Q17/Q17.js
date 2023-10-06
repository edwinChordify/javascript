class Calculator {
    addition(a, b) {
        return a + b;
    }
    subtrction(a, b) {
        return a - b
    }
    multiplication(a, b) {
        return a * b
    }
    division(a, b) {
        return a / b
    }
}
function main() {
    const calculator = new Calculator()
    alert("select one choice 1.additon 2,subtractoin 3.multiplication 4.division")


    const choice = parseInt(prompt("enter your choice"))
    switch (choice) {
        case 1:
            const n1 = parseInt(prompt("enter first number"))
            const n2 = parseInt(prompt("enter second number"))
            prompt("ANSWER is:", calculator.addition(n1, n2))
            break;

        case 2:
            const m1 = parseInt(prompt("enter first number"))
            const m2 = parseInt(prompt("enter second number"))
            prompt("ANSWER is:", calculator.subtrction(m1, m2))
            break;

        case 3:
            const l1 = parseInt(prompt("enter first number"))
            const l2 = parseInt(prompt("enter second number"))
            prompt("ANSWER is:", calculator.multiplication(l1, l2))
            break;

        case 4:
            const c1 = parseInt(prompt("enter first number"))
            const c2 = parseInt(prompt("enter second number"))
            prompt("ANSWER is:", calculator.division(c1, c2))
            break;


    }
}
main()