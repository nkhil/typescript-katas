// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

export default function parse(data: string): number[] {
  const result: number[] = [];
  let score: number = 0;

  data.split('').forEach((input) => {
    switch (input) {
      case 'i': score += 1; break;
      case 'd': score -= 1; break;
      case 's': score **= 2; break;
      case 'o': result.push(score); break;
      default: break;
    }
  });
  return result;
}
