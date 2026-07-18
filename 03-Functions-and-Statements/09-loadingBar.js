function loadingBar(num) {
    
    let bars = num / 10
    let dots = 10 - bars

    let loadingBar = `${num}% [${`%`.repeat(bars)}${`.`.repeat(dots)}]`

    if (num !== 100) {
        console.log(loadingBar)
        console.log(`Still loading...`)
    } else {
        console.log((`100% Complete!`))
        console.log(`[%%%%%%%%%%]`)
    }
}
loadingBar(30)