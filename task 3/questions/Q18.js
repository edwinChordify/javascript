const prompt = require("prompt-sync")()
const n = prompt("enter the written test mark")
const m = prompt("enter the lab test mark")
const l = prompt("enter the assignment mark")
const grade = (n * 70) / 100 + (m * 20) / 100 + (l * 10) / 100
console.log(`the grade of the student is ${grade}`)