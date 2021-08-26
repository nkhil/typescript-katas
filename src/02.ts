// Digital root is the recursive sum of all the digits in a number.
// https://en.wikipedia.org/wiki/Digital_root
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

export default function digitalRoot(n:number) :number {
  function reduceString(num: number) :number {
    const sum = num.toString().split('').reduce((acc, val) => {
      acc = acc + parseInt(val);
      return acc;
    }, 0);
    if (sum > 9) {
      return digitalRoot(sum);
    } 
    return sum;
  }
  if (n <= 9) {
    return n;
  } else {
    return reduceString(n);
  }
}
