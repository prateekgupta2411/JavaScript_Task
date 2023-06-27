let str = "AB ABC ABCD ABCD ABC AB";
let count = 0;
let searchStr = "ABCD";
let searchStrLen= searchStr.length;

for (let i = 0; i <= str.length - searchStrLen; i++) {
    if (str.substring(i, i + searchStrLen) === searchStr) {
    count++;
    }
}

console.log("Count of ABCD =", count);
