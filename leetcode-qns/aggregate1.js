var salesData = [
    { productId: 'A1', amount: 50, store: 'New York' },
    { productId: 'B2', amount: 100, store: 'London' },
    { productId: 'A1', amount: 30, store: 'Paris' },
    { productId: 'B2', amount: 200, store: 'London' },
    { productId: 'C3', amount: 150, store: 'Tokyo' },
];
var saleMap = {};
var totRev = 0;
salesData.forEach(function (sale) {
    var store = sale.store;
    if (!saleMap[sale.productId]) {
        saleMap[sale.productId] = [];
    }
    if (saleMap[sale.productId].indexOf(store) === -1) {
        saleMap[sale.productId].push(store);
    }
    totRev += sale.amount;
});
console.log(saleMap);
console.log(totRev);
