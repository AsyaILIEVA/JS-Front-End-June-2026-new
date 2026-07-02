// function ages(age) {
//     if (age >= 0 && age <= 2) {
//         console.log(`baby`)
//     } else if (age >= 0 && age <= 13) {
//         console.log(`child`)
//     } else if (age >= 0 && age <= 19) {
//         console.log(`teenager`)
//     } else if (age >= 0 && age <= 65) {
//         console.log(`adult`)
//     } else if (age >= 0 && age >= 66) {
//         console.log(`elder`)
//     } else {
//         console.log(`out of bounds`)
//     }
// }
// ages()

function ages(age) {

    let isBaby = age >= 0 && age <= 2
    let isChild = age >= 0 && age <= 13
    let isTeen = age >= 0 && age <= 19
    let isAdult = age >= 0 && age <= 65
    let isElder = age >= 0 && age >= 66

    if (isBaby) {
        console.log(`baby`)
    } else if (isChild) {
        console.log(`child`)
    } else if (isTeen) {
        console.log(`teenager`)
    } else if (isAdult) {
        console.log(`adult`)
    } else if (isElder) {
        console.log(`elder`)
    } else {
        console.log(`out of bounds`)
    }
}
ages(100)


// function ages(age) {

//     let isBaby = age >= 0 && age <= 2
//     let isChild = age >= 0 && age <= 13
//     let isTeen = age >= 0 && age <= 19
//     let isAdult = age >= 0 && age <= 65
//     let isElder = age >= 0 && age >= 66
//     let result = ``

//     if (isBaby) {
//         result = `baby`
//     } else if (isChild) {
//         result = `child`
//     } else if (isTeen) {
//         result = `teenager`
//     } else if (isAdult) {
//         result = `adult`
//     } else if (isElder) {
//         result = `elder`
//     } else {
//         result = `out of bounds`
//     }

//     console.log(result)
// }
// ages()
