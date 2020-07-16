export const convertStringToArrayOfNumbers = (str) => {
  return str.split` `.map((x) => +x);
};

export const addTwoExpressions = (A, B) => {
  const m = A.length;
  const n = B.length;

  const size = Math.max(m, n);
  const sum = new Array(n);
  for (let i = 0; i < size; ++i) sum[i] = 0;
  for (let i = 0; i < m; ++i) sum[i] = A[i];
  for (let i = 0; i < n; ++i) sum[i] += B[i];

  return sum;
};
