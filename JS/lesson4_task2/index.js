const m = 10;
const n = 20;
let result = null;
for (let index = m; index <= n; index++) {
    if (index & 1) {
        result += index;
    }
}
console.log("Result: ", result);