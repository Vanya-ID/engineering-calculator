export const get_factorial = (x) => {
  return x !== 1 ? x * get_factorial(x - 1) : 1;
};
