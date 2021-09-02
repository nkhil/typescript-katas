// https://www.hackerrank.com/challenges/plus-minus/problem
// 
// Given an array of integers, calculate the ratios of its elements
//  that are positive, negative, and zero. Print the decimal value 
// of each fraction on a new line with  places after the decimal.
//
// [1, 1, 0, -1, -1] should print 0.400000, 0.400000, 0.200000
// 
// Print the ratios of positive, negative and zero values in the array. 
// Each value should be printed on a separate line with  digits after the decimal. 
// The function should not return a value.

export default function plusMinus(arr: number[]): void {
  const count = arr.reduce((acc: number[], val: number): number[] => {
    if (val > 0) {
      acc[0] += 1;
    } else if (val < 0) {
      acc[1] += 1;
    } else if (val === 0) {
      acc[2] += 1;
    }
    return acc;
  }, [0, 0, 0]);
  const ratios = count.map(x => x / arr.length);
  ratios.map(x => console.log(x.toFixed(6)));
}
