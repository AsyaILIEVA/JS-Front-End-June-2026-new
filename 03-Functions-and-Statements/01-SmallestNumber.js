function smallestNumber(num1, num2, num3) {
    let smallestNumber = num1

    if (smallestNumber > num2) {
        smallestNumber = num2
    }

    if (smallestNumber > num3) {
        smallestNumber = num3
    }

    console.log(smallestNumber)
} 
smallestNumber(45, 5, 3)