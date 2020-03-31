function findSum(n) {
    let total = 0;
    for(let i = 0; i <= n; i++){
        total += i;
    }
    return total;
}

function sum(n) {
    return n * (n + 1)/2;
}

// let start = new Date();
// console.log(findSum(1000000000));
// let end = new Date();
// console.log((end - start)/1000);

let start = new Date();
console.log(sum(1000000000));
let end = new Date();
console.log((end - start)/1000);