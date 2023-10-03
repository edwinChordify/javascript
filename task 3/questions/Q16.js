const prompt = require("prompt-sync")();
const n = prompt("enter a number")
if (n <= 1) {
    console.log("inavlid")
}
for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
        console.log("not a prime number")
        break;
    } else {
        console.log("it is a prime number")
        break;
    }
}




