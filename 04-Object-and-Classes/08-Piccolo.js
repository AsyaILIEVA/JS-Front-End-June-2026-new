function piccolo(input) {
    
    let parking = new Map()

    input.forEach(row => {
        let [direction, car] = row.split(`, `)

        switch (direction) {
            case `IN`:
                parking.set(car, `Is in the parking`)
                break;
        
            case `OUT`:
                if (parking.has(car)) {
                    parking.delete(car)
                }
                break;
        }
    });

    let sorted = Array.from(parking).sort((a, b) => a[0].localeCompare(b[0]))

    if (sorted.length > 0) {
        for (const sortedElement of sorted) {
            console.log(sortedElement[0])
        }
    } else {
        console.log(`Parking Lot is Empty`)
    }
}
piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])