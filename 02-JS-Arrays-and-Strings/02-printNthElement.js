function printNthElement(array, step){

    let newArray = []
    let inputArrayLength = array.length 

    for (let i = 0; i < inputArrayLength; i+= step) {
        // if (i % step === 0) {
            newArray.push(array[i])
        //}        
    }

    return newArray
}
printNthElement([`5`, `20`, `31`, `4`, `20`], 20)