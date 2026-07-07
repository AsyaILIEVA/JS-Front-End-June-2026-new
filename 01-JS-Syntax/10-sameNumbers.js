function sameNumbers(inputNumber) {
    
    let inputAsString = inputNumber.toString()
    let digitsSum = 0
    let allSame = true
    const firstDigit = inputAsString[0]
    const stringLength = inputAsString.length 

    for (let index = 0; index < stringLength; index++) {
        let currentSymbolAsNumber = Number(inputAsString[index])
        digitsSum += currentSymbolAsNumber

        if (inputAsString[index] !== firstDigit) {
            allSame = false
        }        
    }

    console.log(allSame)
    console.log(digitsSum)
}
sameNumbers(2222222)