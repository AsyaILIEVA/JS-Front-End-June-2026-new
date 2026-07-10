function sortingNumbers(input) {
    let arrayLength = input.length
    let sorted = input.sort((a, b) => a-b)
    let resultArray =[]

    for (let i = 0; i < arrayLength; i++) {
        
        if (i % 2 === 0) {
            resultArray.push(sorted.shift())            
        } else{
            resultArray.push(sorted.pop())
        }        
    }
    return resultArray
}
sortingNumbers([1, 65, 3, 52, 48, 63, -3, 18])