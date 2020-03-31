const check = (orders = [5, 12, 12], bags = [1, 2, 4]) => {
    let results = [
        { size: 4, count: 0},
        { size: 2, count: 0},
        { size: 1, count: 0}
      ];

      const checkOrder = (order, bag) => {
        if (order >= 4) {
          results[0].count += 1;
          order = order - bag;
          checkOrder(order, bag)
        } else if (order < 4 && order >= 2) {
          results[1].count += 1;
          order = order - 2;
          checkOrder(order, bag)
        } else if (order < 2 && order >= 1) {
          results[2].count += 1;
          order = order - bag;
          checkOrder(order, bag)
        } 
      };
    orders.map(order => {
        let lf = order.toString().split('.')[1];
        if((lf !== undefined) && (lf != 5) || order > 20){
            throw new Error('it is not 0.5');
        }
        checkOrder(order, bags[bags.length - 1]);
    });

    let d;
    let lf = orders[0].toString().split('.')[1];
        if((lf !== undefined) && (lf != 5)){
            throw new Error('it is not 0.5');
        }
        if((lf !== undefined) && (lf == 5)){
            d = 0.5;
        }

        if (d === 0.5){
        results[2].count += 1
        }

    if(results[2].count === 2){
        results[1].count +=1;
        results[2].count = 0
    }
    if(results[1].count >= 2){
        results[0].count +=1;
        results[1].count = 0;
    }

    console.log(results);
  }
  console.log(check([20.5]));