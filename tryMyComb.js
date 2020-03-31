const tryMe = (arr) => {
    const newArr = [...arr];
    let max = Math.max(...newArr);
    let maxIndex;
    let right = false;
    let left = false;
  
    for(let i = 0; i <= newArr.length; i++){
      maxIndex = newArr.indexOf(max);
      if((arr.length - 1 >= maxIndex + 3) && (maxIndex - 3 >= 0)){
        right = true;
        left = true;
        break;
      }
      if(arr.length - 1 >= maxIndex + 3 ){
        right = true;
        left = false;
        break;
      }
      if(maxIndex - 3 >= 0){
        right = false;
        left = true;
        break;
      }

      newArr.splice(maxIndex, 1, 0);
      max = Math.max(...newArr);
    }
    let check;

    if(right && left){
        let r = Number(`${max}${arr[maxIndex +1]}${arr[maxIndex + 2]}${arr[maxIndex + 3]}`);
        let f = Number(`${max}${arr[maxIndex - 1]}${arr[maxIndex - 2]}${arr[maxIndex - 3]}`);
        check = r > f ? r : f;
    } else if (right) {
        check = `${max}${arr[maxIndex +1]}${arr[maxIndex + 2]}${arr[maxIndex + 3]}`
    } else{
        check = `${max}${arr[maxIndex - 1]}${arr[maxIndex - 2]}${arr[maxIndex - 3]}`
    }
    return check;

  }
  
  console.log(tryMe([0,1,5,0,0]));