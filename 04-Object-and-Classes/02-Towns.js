function townsInfo(townsArray) {

    // let townInfo = townsArray[current].split(` | `)

    // let townName = townInfo[0]
    // let townLatitude = townInfo[1]
    // let townLongtitude = townInfo[2]

    // let currentTown = {}

    // currentTown.town = townName
    // currentTown.latitude = Number(townLatitude).toFixed(2)
    // currentTown.longitude = Number(townLongtitude).toFixed(2)

    // console.log(currentTown)
    
    townsArray.forEach(town =>{
        let [townName, townLatitude, townLongtitude] = town.split(` | `)

        let currentTown = {}

        currentTown.town = townName
        currentTown.latitude = Number(townLatitude).toFixed(2)
        currentTown.longitude = Number(townLongtitude).toFixed(2)

        console.log(currentTown)
    })
}
townsInfo(
['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])