function getZerosCount(number) {
    let count=0
    for (let i=5; i <= number; i=i*5) {
      count = count + Math.floor(number/i);
      console.log(count);
    }
    console.log(count);
    return count
  }
  getZerosCount(50)