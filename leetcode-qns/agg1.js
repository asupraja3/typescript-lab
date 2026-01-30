var transactions = [
    { merchantId: 'm1', amount: 100, category: 'Electronics' },
    { merchantId: 'm2', amount: 50, category: 'Groceries' },
    { merchantId: 'm1', amount: -20, category: 'Electronics' },
    { merchantId: 'm3', amount: 30, category: 'Health' },
    { merchantId: 'm1', amount: 45, category: 'Accessories' },
];
var tMap = {};
transactions.forEach(function (tr) {
    if (!tMap[tr.merchantId]) {
        tMap[tr.merchantId] = { mID: tr.merchantId, tot: 0, cats: [] };
    }
    tMap[tr.merchantId].tot += tr.amount;
    if (tMap[tr.merchantId].cats.indexOf(tr.category) === -1) {
        tMap[tr.merchantId].cats.push(tr.category);
    }
});
console.log(tMap);
// console.log(Object.values(tMap))
