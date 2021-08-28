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
  const leftAndRightDiagonalTotals: number[] = arr.reduce((acc: number[], val: number[], currentIndex: number): number[] => {
    const leftEl = val[currentIndex];
    const rightEl = [...val].reverse()[currentIndex];
    acc[0] = acc[0] + leftEl;
    acc[1] = acc[1] + rightEl;
    return acc;
  }, [0, 0]);
  return leftAndRightDiagonalTotals.reduce((a, b) => Math.abs(a - b), 0);
}
