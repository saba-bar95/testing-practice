export default function analyzeArray(arr) {
  const obj = {};

  const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  obj.average = average;
  obj.min = min;
  obj.max = max;
  obj.length = arr.length;

  return obj;
}
