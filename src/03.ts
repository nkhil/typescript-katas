// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/typescript

// Your task is to sort a given string. 
// Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. 
// So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
// The words in the input String will only contain 
// valid consecutive numbers.

export default function order(words:string):string {
  const getNumberFromString = (str: string):number => {
    return parseInt(str.split('').filter(e =>  /\d/.test(e))[0]);
  };
  
  const wordsArray = words.split(' ');
  return wordsArray.sort((a: string, b: string):number => {
    const aIndex: number = getNumberFromString(a);
    const bIndex: number = getNumberFromString(b);
    return aIndex > bIndex ? 1 : -1;
  }).join(' ');
}
