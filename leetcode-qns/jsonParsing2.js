var jSON1 = "[\n  {\"id\": 101, \"product\": \"Laptop\", \"category\": \"Electronics\", \"amount\": 1200},\n  {\"id\": 102, \"product\": \"Chair\", \"category\": \"Furniture\", \"amount\": 150},\n  {\"id\": 103, \"product\": \"Headphones\", \"category\": \"Electronics\", \"amount\": 200},\n  {\"id\": 104, \"product\": \"Desk\", \"category\": \"Furniture\", \"amount\": 450},\n  {\"id\": 105, \"product\": \"Monitor\", \"category\": \"Electronics\", \"amount\": 300}\n]";
var products = JSON.parse(jSON1);
var prodfilt = products.filter(function (prod) { return prod.amount <= 200; });
console.log(prodfilt.length);
var mapProd = {};
products.forEach(function (product) {
    var cat = product.category;
    var amt = product.amount;
    if (!mapProd[cat]) {
        mapProd[cat] = 0;
    }
    mapProd[cat] += amt;
});
console.log(mapProd);
