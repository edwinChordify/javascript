function checkPassOrFail(mark) {
    const passMark = 50;
    if (mark >= passMark) {
        return "Passed";
    } else {
        return "Failed";
    }
}

const result = checkPassOrFail(40);
console.log("Result:", result);
