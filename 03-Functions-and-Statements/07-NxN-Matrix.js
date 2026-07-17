function matrix(num) {
    function rowGenerator(num) {
        return`${num} `.repeat(num)
    }

    for (let currentRow = 1; currentRow <= num; currentRow++) {

        console.log(rowGenerator(num).trimEnd())        
    } 
    
    // let result = ``
    // for (let i = 1; i <= num;i++) {
    //     for (let j = 1; j <= num; j++) {
    //         result += num + ` `
    //     }
    //     console.log(result)
    //     result = ``
    // }
}
matrix(3)