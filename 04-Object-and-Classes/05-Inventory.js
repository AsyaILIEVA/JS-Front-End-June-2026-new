function inventory(arr) {
    let heroes = []

    arr.forEach(heroInfo => {
        let [name, level, items] = heroInfo.split(` / `)
        let itemsArr = items.split(`, `)
        level = Number(level)

        heroes.push({
            name,
            level,
            items
        })
    });

    heroes.sort((a, b) => a.level - b.level).forEach(info => {
        console.log(`Hero: ${info.name}`)
        console.log(`level => ${info.level}`)
        console.log(`items => ${info.items}`)
    })
}
inventory([

'Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'

])