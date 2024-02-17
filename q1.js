//Do the below programs in anonymous function & IIFE

//Print odd numbers in an array//

(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//Convert all the strings to title caps in a string array

(function(arr) {
    var titleCapsArray = arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    console.log(titleCapsArray);
})(["hello", "world", "javascript"]);

//Sum of all numbers in an array

(function(arr) {
    var sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

//Return all the prime numbers in an array

(function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    var primeNumbers = arr.filter(function(num) {
        return isPrime(num);
    });
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Return all the palindromes in an array

(function(arr) {
    function isPalindrome(str) {
        return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
    }
    var palindromes = arr.filter(function(str) {
        return isPalindrome(str);
    });
    console.log(palindromes);
})(["hi", "hello", "level", "world", "good morning"]);

//Return median of two sorted arrays of the same size:

(function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    var length = mergedArray.length;
    var median = length % 2 === 0 ? (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2 : mergedArray[Math.floor(length / 2)];
    console.log(median);
})([1, 2, 3], [4, 5, 6]);

//Remove duplicates from an array

(function(arr) {
    var uniqueArray = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);

//Rotate an array by k times:

(function(arr, k) {
    k = k % arr.length;
    var rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);


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


