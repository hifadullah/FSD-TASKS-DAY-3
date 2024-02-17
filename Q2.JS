//2.Do the below programs in arrow functions.



//1. Print odd numbers in an array:

javascript
const printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//2. Convert all the strings to title caps in a string array:

javascript
const convertToTitleCaps = arr => {
    const titleCapsArray = arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCapsArray);
};

convertToTitleCaps(["hello", "world", "javascript"]);


//3. Sum of all numbers in an array:


const sumOfNumbers = arr => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
};

sumOfNumbers([1, 2, 3, 4, 5]);


//4. Return all the prime numbers in an array:


const getPrimeNumbers = arr => {
    const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const primeNumbers = arr.filter(num => isPrime(num));
    console.log(primeNumbers);
};

getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//5. Return all the palindromes in an array:

const getPalindromes = arr => {
    const isPalindrome = str => {
        return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
    };
    const palindromes = arr.filter(str => isPalindrome(str));
    console.log(palindromes);
};

getPalindromes(["hi", "hello", "hai", "world", "hello"]);

