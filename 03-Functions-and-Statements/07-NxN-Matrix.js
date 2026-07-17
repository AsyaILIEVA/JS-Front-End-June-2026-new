function matrix(num) {
    function rowGenerator(num) {
        return`${num} `.repeat(num)
    }

    for (let currentRow = 1; currentRow <= num; currentRow++) {
        
        console.log(rowGenerator(num).trimEnd())        
    }    
}
matrix(3)