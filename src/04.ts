// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/typescript

// #Fold an array
// In this kata you have to write a method that folds a given array of integers by the middle x-times.


export default function foldArray(array:number[], runs: number):number[] {
  function foldArrayOnce(a: number[]) {
    const numOfElementsToAdd: number = Math.floor(a.length / 2);

    const resultArr: number[] = a.reduce((acc: number[], val: number, i: number, arr: number[]): number[] => {
      if (i < numOfElementsToAdd) {
        const correspondingIndex = (array.length - i) - 1;
        const result = val + arr[correspondingIndex];
        acc.push(result);
      }
      return acc;
    }, []);

    if (a.length % 2 === 1) {
      resultArr.push(array[numOfElementsToAdd]);
    }

    array = resultArr;
  }

  for (let i = 0; i < runs; i += 1) {
    foldArrayOnce(array);
  }
  return array;
}
