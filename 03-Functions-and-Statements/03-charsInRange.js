function charsInRange(charOne, charTwo){

    const codeOne = charOne.charCodeAt(0)
    const codeTwo = charTwo.charCodeAt(0)

    let start
    let end

    if (codeOne < codeTwo) {
        start = codeOne
        end = codeTwo
    } else{
        start = codeTwo
        end = codeOne
    }

    let result = ``

    for (let code = start + 1; code < end; code++) {
        result += String.fromCharCode(code) + ` `        
    }    

    console.log(result)

    // let result = []

    // for (let code = start + 1; code < end; code++) {
    //     result.push(String.fromCharCode(code))        
    // }    

    // console.log(result.join(` `))
}
charsInRange(`a`, `d`)