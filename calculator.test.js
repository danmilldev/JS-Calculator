import { sum, divide } from './calculator.js'
import { DivideByZeroError } from "./customErrors.js";

describe('sum function', () => {

    describe('value tests', () => {
        test('should be able to calculate positive numbers', () => {
            expect(sum(1,2)).toBe(3);
        });
    
        test('should be able to calculate negative numbers', () => {
            expect(sum(-1,-2)).toBe(-3);
        });
    
        test('should be a bigint if number is too high', () => {
            expect(typeof(sum(999_999_999_999_999_999_999_999,1))).toBe("bigint");
        });
    
        test('should be able to calculate big numbers', () => {
            expect(sum(999_999_999_999_999_999_999,1)).toBe(1000000000000000000000);
        });
    
        test('should be able to calculate decimals and return a number', () => {
            expect(sum(0.1,0.2)).toBe(0.3);
        });

        test('should be able to calculate negative decimals and return a number', () => {
            expect(sum(-0.1,-0.2)).toBe(-0.3);
        });

        test('should be able to calculate decimals and return a number with fixed 2 decimals', () => {
            expect(sum(0.111,0.222)).toBe(0.33);
        });
    });

    describe('error tests', () => {
        test('should throw an TypeError on all wrong input', () => {
            expect(() => {
                sum('1','2')
            }).toThrow(TypeError('Parameter is not a number.'));
        });
    
        test('should throw an TypeError on first wrong input', () => {
            expect(() => {
                sum(2,'2')
            }).toThrow(TypeError('Parameter is not a number.'));
        });
    
        test('should throw an TypeError on second wrong input', () => {
            expect(() => {
                sum('2',2)
            }).toThrow(TypeError('Parameter is not a number.'));
        }); 
    });
})

describe('divide function', () => {

    describe('value tests', () => {
        test('should be able to divide positive numbers', () => {
            expect(divide(10,2)).toBe(5);
        });
    
        test('should be able to divide negative numbers', () => {
            expect(divide(-10,2)).toBe(-5);
        });

        test('should be a bigint if number is too high', () => {
            expect(typeof(divide(999_999_999_999_999_999_999_999,1))).toBe("bigint");
        });
    
        test('should be able to divide big numbers', () => {
            expect(divide(999_999_999_999_999_999_999,2)).toBe(500000000000000000000);
        });

        test('should be able to divide negative big numbers', () => {
            expect(divide(-999_999_999_999_999_999_999,2)).toBe(-500000000000000000000);
        });

        test('should be able to divide decimal numbers', () => {
            expect(divide(10.2,4.2)).toBe(2.43);
        });

        test('should be able to divide negative decimal numbers', () => {
            expect(divide(-10.2,4.2)).toBe(-2.43);
        });
    })

    describe('error tests', () => {
        test('should throw an TypeError on all wrong input', () => {
            expect(() => {
                divide('1','2')
            }).toThrow(TypeError('Parameter is not a number.'));
        });
    
        test('should throw an TypeError on first wrong input', () => {
            expect(() => {
                divide(2,'2')
            }).toThrow(TypeError('Parameter is not a number.'));
        });
    
        test('should throw an TypeError on second wrong input', () => {
            expect(() => {
                divide('2',2)
            }).toThrow(TypeError('Parameter is not a number.'));
        });

        test('should not be able to divide by 0', () => {
            expect(() => {
                divide(10,0)
            }).toThrow(DivideByZeroError);
        });

        test('should not be inserted with a 0 as starting value', () => {
            expect(() => {
                divide(0,10)
            }).toThrow(DivideByZeroError);
        });
    });
})
