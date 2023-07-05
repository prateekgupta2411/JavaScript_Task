// task b(i)
const numbers = [1, 2, 3, 4, 5];
const cubeSum = numbers.reduce((sum, num) => {
  const cube = num * num * num;
    return sum + cube;
}, 0);
console.log(cubeSum);

//task b(ii)
const numbers1 = [7, 2, 9, 1, 5];
const largestNumber = numbers1.reduce((max, num) => {
    if (num > max) {
    return num;
}
return max;
});
console.log(largestNumber);

//task b(iii)
const strings = ['apple', 'banana', 'cherry', 'date'];
const smallestString = strings.reduce((smallest, str) => {
    if (str.length < smallest.length) {
    return str;
}
return smallest;
});
console.log(smallestString);

//task b(iv)
const prods = [
    { name: 'Pepsi', qty: 20, price: 15 },
    { name: 'Coke', qty: 15, price: 10 },
    { name: 'Maggi', qty: 10, price: 12 },
    { name: 'Colgate', qty: 6, price: 60 },
    { name: 'Perk', qty: 20, price: 5 }
];
const totalSalesValue = prods.reduce((total, product) => {
    const productValue = product.qty * product.price;
    return total + productValue;
}, 0);
console.log(totalSalesValue);

//task b(v)
const prod = [
    { name: 'Pepsi', qty: 20, price: 15 },
    { name: 'Coke', qty: 15, price: 10 },
    { name: 'Maggi', qty: 10, price: 12 },
    { name: 'Colgate', qty: 6, price: 60 },
    { name: 'Perk', qty: 20, price: 5 }
];
const productWithMaxSales = prod.reduce((maxProduct, product) => {
    const productValue = product.qty * product.price;
    if (productValue > maxProduct.value) {
        return { name: product.name, value: productValue };
    }
    return maxProduct;
}, { name: '', value: 0 });
console.log(productWithMaxSales);


