function sortNames(arrNames) {
    
    let sortedNames = arrNames.sort((a, b) => a.localeCompare(b))
    let arrayLength = sortNames.length

    for (let i = 0; i < arrayLength; i++) {
        
        console.log(`${i + 1}.${sortedNames[i]}`);
    }

}