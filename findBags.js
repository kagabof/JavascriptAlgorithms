
const just = (orders , bag = [4,2,1]) => {
    let a = 0;
    let r = 0;
    const result = [];
    if(data >= 4){
        a = parseInt(data/4, 10);
        // result.push(
        //     ...result
        // )
        result.push({
            size:4, count: a
        });
        r = data%4;
    }
    if(r>=2 || data === 2){
        a = parseInt(data/2, 10);
        result.push({
            size:2, count: a
        });
        r = data%2;
    }
    if(r===1 || data === 1){
        result.push({
            size:1, count: 1
        });
    }
}
const bags = (orders = [5], bag = [4,2,1]) => {
    const result = [];
    orders.map((data, index) => {
        let dd = data;
        let a4 = parseInt(dd/4, 10);
        let a2 = ;
        let a1 = 0;
        let r = 0;
        // const result = [];

        a = parseInt(data/4, 10);
        if(data >= 4){
            a = parseInt(data/4, 10);
            // result.push(
            //     ...result
            // )
            result.push({
                size:4, count: a
            });
            r = data%4;
        }

        if(r>=2 || data === 2 ){
            a = parseInt(data/2, 10);
            result.push({
                size:2, count: a
            });
            r = data%2;
        }
        if(r===1 || data === 1){
            // a = parseInt(data/2, 10);
            result.push({
                size:1, count: 1
            });
            // r = data%2;
        }
        
        // let d = data/10;
    });
    console.log(result);
}

bags();