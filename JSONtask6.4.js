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
let newProduct = {
    code: 'PX104',
    stock: 10,
    price: 40
};
shop.products.push(newProduct);
shop.totalStockQty = shop.products.reduce((total, product) => total + product.stock, 0);
console.log(shop);
