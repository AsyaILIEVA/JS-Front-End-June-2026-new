function wordsTracker(input) {
    let targets = input[0].split(` `)
    let counts = new Map(targets.map(word => [word, 0]))

    for (let i = 1; i < input.length; i++) {
        let word = input[i]
        if (counts.has(word)) {
            counts.set(word, counts.get(word) + 1)            
        }        
    }

    Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, count]) => {
        console.log(`${word} - ${count}`)
    })
}
wordsTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])