import { DivideByZeroError } from "./customErrors.js";

function sum(num1, num2) {
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        //if inputs arent a number
        throw new TypeError('Parameter is not a number.')  
    }
    else if(num1 > 999_999_999_999_999_999_999 || num2 > 999_999_999_999_999_999_999)
    {
        // if number is too big return a bigint
        return BigInt(num1 + num2)
    }
    else if(num1 % 1 !== 0 || num2 % 1 !== 0)
    {
        // if a numbers is a decimal convert to float and 
        // convert it to a number that will be returned
        return Number(parseFloat(num1 + num2).toFixed(2))
    }
    return num1 + num2
}

function divide(num1, num2) {
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number')
    {
        //if inputs arent a number
        throw new TypeError('Parameter is not a number.')  
    }
    else if(num2 === 0 || num1 === 0)
    {
        throw new DivideByZeroError('You can not divide by 0.')
    }
    else if(num1 > 999_999_999_999_999_999_999 || num2 > 999_999_999_999_999_999_999)
    {
        // if number is too big return a bigint
        return BigInt(num1 / num2)
    }
    else if((num1 / num2) % 1 !== 0)
    {
        return Number(parseFloat(num1 / num2).toFixed(2))
    }
    return num1 / num2
}

export { sum, divide }