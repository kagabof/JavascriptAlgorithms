function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length){
        return false;
    }
    const obj1 = {};
    const obj2 = {};
    for(let chr in str1){
        obj1[str1[chr]] = ++obj1[str1[chr]] || 1;
    }
    for(let chr in str2){
        obj2[str2[chr]] = ++obj2[str2[chr]] || 1;
    }
    const keys = Object.keys(obj1);
    for(let i = 0; i < keys.length; i++){
        if(!obj2[keys[i]]){
            return false;
        }
        if(obj1[keys[i]] !== obj2[keys[i]]){
            return false;
        }
    }
    return true;
}
console.log(validAnagram('',''))
console.log(validAnagram('aaz','zza'))
console.log(validAnagram('anagram','nagaram'))
console.log(validAnagram('rat','car'))
console.log(validAnagram('awesome','awesom'))
console.log(validAnagram('amanaplanacanalpanama','acanalmanplanpanama'))