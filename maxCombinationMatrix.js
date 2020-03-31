let bigLg = '';
let allPrev = [];
const findMax  = (arr, y = 0) => {
    let result = [];
    let max = arr;
    let foundMax = Math.max(...arr)
    max.map((val, index)=> (val === foundMax) && result.push({
        val: val,
        x: index,
        y: y,
    }) );
    return result;
};
const findMaxAllRow = (arr) => {
    const lg = [];
    arr.map((val, index) => {
        lg.push(findMax(val, index));
    });
    return lg;
}


const findRowWithLg = (arr) => {
    let max = 0;
    let newArr = [];
    arr.map((l)=> {
        l.map(d => {
            if(max == d.val ){
                newArr.push(d);
                max = d.val;
                allPrev.push({x: d.x, y: d.y})
                }
                if(max < d.val){
                newArr = [];
                newArr.push(d);
                max = d.val;
                allPrev.push({x: d.x, y: d.y})
                }
        })
    });
    bigLg += `${max}`;
    return newArr;
}


const makeCoord = (max, x, y, prev) => ({
    val: max === 0 ? 0 : max || null,
    x: x === 0 ? 0 : x || null,
    y: y === 0 ? 0 : y || null,
    prev
});

const findSides = (data, max) => {
    let top = max.y === 0
      ? makeCoord(null,
        null,
        null,
        {x: max.x, y: max.y})
      : makeCoord(data[max.y - 1][max.x],
        max.x,
        max.y - 1,
        {x: max.x, y: max.y});
  
    let right = (data[max.y]
        && (data[max.y].length -1 !== max.x))
      ? makeCoord(data[max.y][max.x +1],
        max.x +1,
        max.y,
        {x: max.x, y: max.y})
      : makeCoord(null, null, null, {x: max.x, y: max.y});
  
    let bottom = ((data.length - 1) !== max.y)
      ? makeCoord(data[max.y + 1][max.x],
        max.x,
        max.y + 1,
        {x: max.x, y: max.y})
      : makeCoord(null, null, null, {x: max.x, y: max.y});
  
    let left = (max.x !== 0)
      ? makeCoord(data[max.y][max.x -1],
        max.x - 1,
        max.y,
        {x: max.x, y: max.y})
      : makeCoord(null, null, null, {x: max.x, y: max.y});
  
    return [
      top,
      right,
      bottom,
      left,
    ];
  }


const findSidesNext = (data, max) => {
    allPrev.push(max.prev);
    let top = (max.y === 0)
    || ((max.y - 1 === max.prev.y) && (max.x === max.prev.x))
        ? makeCoord(null, null, null, {x: max.x, y: max.y})
        : makeCoord(data[max.y - 1][max.x],
        max.x,
        max.y - 1,
        {x: max.x, y: max.y});
    let right = (!data[max.y]
        || (data[max.y].length -1 === max.x)
        || ((max.y === max.prev.y) && (max.x + 1 === max.prev.x) )
        )
      ? makeCoord(null, null, null, {x: null, y: null})
      : makeCoord(data[max.y][max.x +1], max.x +1, max.y, {x: max.x, y: max.y});
      
  
    let bottom = (((data.length - 1) === max.y)
     || (((max.y - 1) === max.prev.y) && (max.x === max.prev.x)))
        ? makeCoord(null, null, null, {x: null, y: null})
        : makeCoord(data[max.y + 1][max.x], max.x, max.y + 1, {x: max.x, y: max.y});

    let left = ((max.x === 0)
    || ((max.y === max.prev.y) && (max.x - 1 === max.prev.x) ))
        ? makeCoord(null, null, null, {x: null, y: null})
        : makeCoord(data[max.y][max.x -1], max.x -1, max.y, {x: max.x, y: max.y});
      
      
  
    return [
      top,
      right,
      bottom,
      left,
    ];
};


const caseForOne = (arr) => {
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



const main = (data) => {
    if(data.length == 1){
        return caseForOne([...data[0]]);
    }
    // first
    const max = findMaxAllRow(data);
    const allMax = findRowWithLg(max);

    const nextMax = [];
    allMax.map((d, index)=> {
        nextMax.push(findSides(data, allMax[index]))
    })

    const nextMax2 = findRowWithLg(nextMax);
 
    //next
    const nextMax3 = [];
    nextMax2.map((d, index) => {
        nextMax3.push(findSidesNext(data, nextMax2[index]))
    });
    const nextMax4 = findRowWithLg(nextMax3);

    //next
    const nextMax5 = [];
    nextMax4.map((d, index) => {
        nextMax5.push(findSidesNext(data, nextMax4[index]))
    });

    const nextMax6 = findRowWithLg(nextMax5);

    return bigLg;
}





// console.log('1. ', main([
//     [9,1,1,0,7],
//     [1,0,2,1,0],
//     [1,9,1,1,0],
//   ]));

  console.log('2. ',main([
    [1,1,1],
    [1,3,4],
    [1,4,3],
  ]));

//   console.log('3. ',main([
//     [2,3,5,0,1],
//   ]));


