// Create a function that logs a right aligned
// hash tree to console

export default function whatever(n: number): void {
  for (let i = 1; i <= n; i += 1) {
    const space = ' ';
    const char = '#';
    console.log(`${space.repeat(n - i)}${char.repeat(i)}`);
  }
}
