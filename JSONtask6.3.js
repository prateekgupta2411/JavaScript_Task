let product1 = {
    code: 'PX101',
    stock: 15,
    price: 30
};
let product2 = {
    code: 'PX102',
    stock: 24,
    price: 20
};
let product3 = {
    code: 'PX103',
    stock: 33,
    price: 10
};
let shop = {
    products: [product1, product2, product3]
};

let totalStockQty = 0;
for (let i = 0; i < shop.products.length; i++) {
    totalStockQty += shop.products[i].stock;
}
shop.totalStockQty = totalStockQty;
console.log(shop);
