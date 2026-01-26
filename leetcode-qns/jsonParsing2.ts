

interface Product {
    id :number;
    product: string;
    category: string;
    amount:number
}

let jSON1 = `[
  {"id": 101, "product": "Laptop", "category": "Electronics", "amount": 1200},
  {"id": 102, "product": "Chair", "category": "Furniture", "amount": 150},
  {"id": 103, "product": "Headphones", "category": "Electronics", "amount": 200},
  {"id": 104, "product": "Desk", "category": "Furniture", "amount": 450},
  {"id": 105, "product": "Monitor", "category": "Electronics", "amount": 300}
]`

let products:Product[] = JSON.parse(jSON1)

let prodfilt = products.filter(prod=>prod.amount<=200)

console.log(prodfilt.length)

let mapProd: {[key:string]: number } = {}

products.forEach(product => {
    const cat = product.category
    const amt = product.amount
    if (!mapProd[cat]){
        mapProd[cat] = 0
    }
    mapProd[cat] += amt
    

});
console.log(mapProd)

