function checkGrade(grade) {
    if (grade > 90) {
        return "A"
    }
    else if (grade > 80 && grade < 89) {
        return 'B'

    }
    else if (grade > 70 && grade < 79) {
        return 'C'

    }
    else if (grade > 60 && grade < 69) {
        return 'D'

    }
    else if (grade > 50 && grade < 59) {
        return 'E'

    }
    else if (grade < 50) {
        return 'failed'

    }

}
const result = checkGrade(53)
console.log(result)