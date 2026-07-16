function addAndSubtract(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2
    }

    let sumOfFirstTwoNumbers = sum(num1, num2)

    let subtract = (num3) => {

        return sumOfFirstTwoNumbers - num3
    }

    let result = subtract(num3)
    
    console.log(result)
}
addAndSubtract(26, 6, 13)