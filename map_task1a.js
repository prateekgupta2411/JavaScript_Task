// task a(i)
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);
console.log(squares);

// task a(ii)
const numbers1 = [3,10,-5,0,-22,6];
const absoluteValues = numbers1.map(number => (number < 0 ? -number : number));
console.log(absoluteValues);

//task a(iii)
const strings = ["Hello", "World", "Hi", "Bye"];
const wrappedStrings = strings.map(string => "<p>" + string + "</p>");
console.log(wrappedStrings);

//task a(iv)
const strings1 = ["Hello", "World", "OpenAI", "Chatbot"];
const maxlen = 3;
const truncatedStrings = strings1.map(string => string.substr(0, maxlen));
console.log(truncatedStrings);

// task a(v)
const prods = [
    { name: 'Pepsi', qty: 20, price: 15 },
    { name: 'Coke', qty: 15, price: 10 },
    { name: 'Maggi', qty: 10, price: 12 },
    { name: 'Colgate', qty: 6, price: 60 },
    { name: 'Perk', qty: 20, price: 5 }
];
const transformedData = prods.map(item => {
    return {
        product: item.name,
        value: item.qty * item.price
    };
});
const sortedData = transformedData.sort((a, b) => b.value - a.value);
console.log(sortedData);


// task a(vi)
const names = ['Prateek gupta', 'Ritik Gupta', 'Rohan Sharma'];

const formattedNames = names.map(name => {
    const spaceIndex = name.indexOf(' ');
return {
    firstName: name.substring(0, spaceIndex),
    lastName: name.substring(spaceIndex + 1)
    };
});
console.log(formattedNames);
