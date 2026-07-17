function oddAndEvenSum(num) {
    
    let numAsString = num.toString()
    let newArray = numAsString.split(``).map(Number)

    let oddSum = 0
    let evenSum = 0

    let arrayLength = newArray.length

    for (let i = 0; i < arrayLength; i++) {
        
        const currentNumber = newArray[i]
        let isEven = currentNumber % 2 === 0

        if (isEven) {
            evenSum += currentNumber
        } else {
            oddSum += currentNumber
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(10000435)