function vacation(people, groupType, dayOfWeek) {

    // const requestInfo = {
    //     groupType: "Students",
    //     peopleInGroup: 30,
    //     dayOfWeek: "Sunday",
    //     singlePersonPrice: 10.46
    // }
    
    let totalGroupPrice = 0

    switch (groupType) {
        case `Students`:
            if (dayOfWeek === `Friday`) {
                totalGroupPrice = people * 8.45
            } else if (dayOfWeek === `Saturday`) {
                totalGroupPrice = people * 9.80
            } else if (dayOfWeek === `Sunday`) {
                totalGroupPrice = people * 10.46
                //totalGroupPrice = requestInfo.peopleInGroup * requestInfo.singlePersonPrice
            }

            if (people >= 30) {
                totalGroupPrice *= 0.85
            }
            break;
            case `Business`:
                if (people >= 100) {
                    people -= 10
                }

            if (dayOfWeek === `Friday`) {
                totalGroupPrice = people * 10.90
            } else if (dayOfWeek === `Saturday`) {
                totalGroupPrice = people * 15.60
            } else if (dayOfWeek === `Sunday`) {
                totalGroupPrice = people * 16
            }
            break;
            case `Regular`:
            if (dayOfWeek === `Friday`) {
                totalGroupPrice = people * 15
            } else if (dayOfWeek === `Saturday`) {
                totalGroupPrice = people * 20
            } else if (dayOfWeek === `Sunday`) {
                totalGroupPrice = people * 22.50
            }

            if (people >= 10 && people <= 20) {
                totalGroupPrice *= 0.95
            }
            break;    
        
    }

    console.log(`Total price: ${totalGroupPrice.toFixed(2)}`)

}
vacation(30, "Students", "Sunday")