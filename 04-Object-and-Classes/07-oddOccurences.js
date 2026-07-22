function oddOccurences(string) {
    let arrOfElements = string.toLowerCase().split(` `)
    let occurences = {}

    for (const element of arrOfElements) {
        if (occurences.hasOwnProperty(element)) {
            occurences[element] += 1            
        } else {
            occurences[element] = 1
        }        
    }

    let sortedOccurences = Object.entries(occurences).sort((a, b) => b[1] - a[1])
    let finalResult = []

    for (const element of sortedOccurences) {
        if (element[1] % 2 !== 0) {
            finalResult.push(element[0])
        }        
    }

    console.log(finalResult.join(` `))
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')