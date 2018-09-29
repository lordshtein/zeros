module.exports = function getZerosCount(number) {
  let count=0
  for (let i=5; i <= number; i=i*5) {
    count = count + Math.trunc(number/i);
  }
  return count
}
