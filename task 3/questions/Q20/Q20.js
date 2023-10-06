

let numRows = prompt("enter the rows")
let number = 1;
let result = '';

for (let i = 1; i <= numRows; i++) {
  for (let j = 1; j <= i; j++) {
    result += `${number} `;

    number++
  }
  result += '\n';
}

console.log(result);