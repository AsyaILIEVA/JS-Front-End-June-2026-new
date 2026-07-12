function revealWords(words, sentence) {

    let splitWords = words.split(`, `)  
        
    for(let word of splitWords) {
        sentence = sentence.replace(`*`.repeat(word.length), word)
    }
    console.log(sentence)

}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')