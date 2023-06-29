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
let productsToIncreasePrice = ['PX101', 'PX103'];
productsToIncreasePrice.forEach(productName => {
    let product = shop.products.find(p => p.code === productName);
    if (product) {
        product.price += product.price * 0.1; // Increase price by 10%
    }
});

console.log(shop);
