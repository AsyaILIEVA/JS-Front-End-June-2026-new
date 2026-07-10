function sortNames(arrNames) {
    
    let sortedNames = arrNames.sort((a, b) => a.localeCompare(b))
    // let arrayLength = sortedNames.length

    // for (let i = 0; i < arrayLength; i++) {
        
    //     console.log(`${i + 1}.${sortedNames[i]}`);
    // }

    sortedNames.forEach((element, index) => {
        console.log(`${index + 1}.${element}`)
    });
}
sortNames(["Zack", "John", "Bob", "Ana"])