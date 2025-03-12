function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimeNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    return arr.filter(num => isPrime(num));
}
console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

console.log(filterPrimeNumbers([])); 

console.log(filterPrimeNumbers("abc")); 

console.log(filterPrimeNumbers([4, 6, 8, 10, 11, 13])); 
