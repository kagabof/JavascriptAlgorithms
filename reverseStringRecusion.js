const reverse = (str) => {
    const arr = str.split('');
    const result = [];
    const rev = (arr1) => {
        if(arr1.length === 0) return;
        result.push(arr1[arr1.length - 1]);
        arr1.splice(arr.length-1, 1)
        rev(arr1)
    }
    rev(arr)
    return result.join('');
}

console.log(reverse('rithmschool'));