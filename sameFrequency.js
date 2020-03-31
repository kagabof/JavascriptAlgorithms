const sameArrayFrequency = (num1, num2) => {
    const arr1 = num1.toString().split('');
    const arr2 = num2.toString().split('');

    if(arr1.length !== arr2.length){
        return false;
    }
    const obj = {};
    const obj1 = {};
    arr1.map((j, index) => {
        obj[j] = ++obj[j] || 1;
        obj1[arr2[index]] = obj1[arr2[index]]++ || 1;
    });
    const keys = Object.keys(obj)
    for(let i = 0; i < keys.length; i++){
        if(!obj1[keys[i]]){
            return false;
        }
    }

    return true;
}

console.log(sameArrayFrequency(182, 281));
console.log(sameArrayFrequency(34, 14));
console.log(sameArrayFrequency(3589578, 5879385));
console.log(sameArrayFrequency(22, 222));