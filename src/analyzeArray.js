export function analyzeArray(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const length = arr.length;
  const average = sum / length;
  const min = arr.reduce((a, b) => Math.min(a, b), Infinity);
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
  return { average, min, max, length };
}
