function areThereDuplicates(...args) {
    const obj = {};
    for(let i = 0; i < args.length; i++) {
        obj[args[i]] = ++obj[args[i]] || 1;
    }
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        if(obj[keys[i]] === 2){
            return true;
        }
    }
    return false;
}

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
//   }

console.log(areThereDuplicates(1,3,4,5,6,3));