function sumDigits(inputNumber) {
    
    let digitsSum = 0
    let inputAsString = inputNumber.toString()

    const stringLength = inputAsString.length 

    for (let index = 0; index < stringLength; index++) {
        let currentSymbolAsNumber = Number(inputAsString[index])
        digitsSum += currentSymbolAsNumber        
    }

    console.log(digitsSum)

    //console.log(inputNumber.toString().split(``).reduce((sum, char) => sum + Number(char), 0))
}
sumDigits(245678)