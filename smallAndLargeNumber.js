let ll5 = [1, 2, 3, 4,5];
let ll1 = [1, 2, 3, 4,5];
  const lgNumber = (lgArr) => {
    let d = lgArr;
    let lg = 0;
    for( let i = 1; i < lgArr.length; i++){
        lg += Math.max(...lgArr);
        lgArr.splice(lgArr.indexOf(Math.max(...lgArr)), 1, 0);
      }
    return lg;
  }

  const mm = lgNumber(ll1);

const smallNum = (minArr) => {
    let me = minArr;
    let sl = 0;
      for( let i = 1; i < me.length ; i++){
        sl += Math.min(...me);
        let index = me.indexOf(Math.min(...me));
        
        me.splice(index, 1, Math.max(...me));
      }
      return sl;
      }
const dd = smallNum(ll5);
console.log(dd +"  "+ mm);