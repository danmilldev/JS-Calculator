class DivideByZeroError extends Error {
    constructor(message) {
      super(message);
      this.name = 'DivideByZeroError';
    }
}

export { DivideByZeroError }