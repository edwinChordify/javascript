// Initialize an empty array to store the form values
const valueArray = [];

function addValueToArray() {
    const inputValue = document.getElementById('inputValue').value;
    const inputAge = document.getElementById('age').value;
    const inputEmail = document.getElementById('email').value;



    user = {
        name: inputValue,
        age: inputAge,
        email: inputEmail
    }
    valueArray.push(user);
    console.log(user[0])



    console.log(valueArray)
    objectLength = Object.keys(user).length
    
    for (i = 1; i <=valueArray.length ; i++) {
    localStorage.setItem(`user${i}`, JSON.stringify(valueArray[i]))
    }
}






