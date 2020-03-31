const tryMe = (time) => {
    const a = time.split(':');
    const b = a[a.length - 1].split('').slice(2).join('');
    // const lsa
  
    if(b === 'PM' && Number(a[0]) === 12){
      return `12:${a[1]}:${a[2].split('')[0]}${a[2].split('')[1]}`
    }else if(b === 'AM' && Number(a[0]) === 12){
      return `00:${a[1]}:${a[2].split('')[0]}${a[2].split('')[1]}`
    }else if(b === 'PM'){
      return `${Number(a[0])+12}:${a[1]}:${a[2].split('')[0]}${a[2].split('')[1]}`
    }else{
   return `${a[0]}:${a[1]}:${a[2].split('')[0]}${a[2].split('')[1]}`
    }
  }
  
  console.log(tryMe('12:05:45AM'));