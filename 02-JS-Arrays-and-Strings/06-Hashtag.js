function hashtag(sentence) {
    let words = sentence.split(` `)

    for(const word of words) {
        if(word.startsWith(`#`) && word.length > 1) {

            isSpecial = true
            for (let i = 1; i < word.length; i++) {
                  let asciiCode = word.charCodeAt(1)
                  let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)

                if(!isLetter){
                    isSpecial = false
                    break;
                }
            }
            
            if(isSpecial){                
                console.log(word.substring(1))
            }
           
        }
    }
    
}