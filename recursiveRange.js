const recursiveRange = (num) => {
    if(!num) return 0;
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6))