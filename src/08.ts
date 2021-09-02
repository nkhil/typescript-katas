// https://www.hackerrank.com/challenges/mini-max-sum/problem?h_r=next-challenge&h_v=zen
//
// Given five positive integers, find the minimum and maximum 
// values that can be calculated by summing exactly four of 
// the five integers. 
// Then print the respective minimum and maximum values 
// as a single line of two space-separated long integers.
// [1, 3, 5, 7, 9] => 1 + 3 + 5 + 7 = 16 && [3, 5, 7, 9] = 24
// returns [16, 24] 

export default function miniMaxSum(arr: number[]): void {
  const maxNum: number = Math.max(...arr);
  const minNum: number = Math.min(...arr);
  const total = arr.reduce((a, b) => a + b, 0);
  console.log(`${total - maxNum} ${total - minNum}`);
}
