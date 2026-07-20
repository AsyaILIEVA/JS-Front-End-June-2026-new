function store(stocks, productsOrder) {
    
    let total = {}
    const stocksLength = stocks.length 
    const productsOrderLength = productsOrder.length 

    for (let i = 0; i < stocksLength; i+=2) {
        let currentProduct = stocks[i]
        total[currentProduct] = Number(stocks[i + 1])        
    }

    for (let i = 0; i < productsOrderLength; i+=2) {
        let currentProduct = productsOrder[i]

        if (!total.hasOwnProperty(currentProduct)) {
            total[currentProduct] = 0
        }
        
        total[currentProduct] += Number(productsOrder[1 + i])
    }

    Object.keys(total).forEach( key => {
        console.log(`${key} -> ${total[key]}`)
    })

    // for(const key in total) {
    //     console.log(`${key} -> ${total[key]}`)
    // }
}
store(
['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)