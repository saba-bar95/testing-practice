const calculator = {
  add(a, b) {
    return a + b;
  },

  subract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return b !== 0 ? a / b : "You cannot divide 0";
  },

  multiply(a, b) {
    return a * b;
  },
};

export { calculator };
