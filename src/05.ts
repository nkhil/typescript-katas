// https://www.hackerrank.com/challenges/diagonal-difference/problem
// Given a square matrix, calculate the absolute difference
// between the sums of its diagonals.
// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9 
// The left-to-right diagonal 1 + 5 + 9 = 15 . The right to left diagonal 3 + 5 + 9 = 17
// Their absolute difference is 15 - 17 = 2


export default function diagonalDifference(arr: number[][]): number {
  const leftToRightTotal: number = arr.reduce((acc: number, val: number[], currentIndex: number): number => {
    const el = val[currentIndex];
    return acc + el;
  }, 0);
  const rightToLeftTotal: number = arr.reverse().reduce((acc: number, val: number[], currentIndex: number): number => {
    const el = val[currentIndex];
    return acc + el;
  }, 0);
  return Math.abs(leftToRightTotal - rightToLeftTotal);
}
