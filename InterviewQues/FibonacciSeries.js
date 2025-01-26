// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
function func(num) {
    var fib = [0, 1];
    console.log(fib.length);
    
    while (fib.length <= num) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

console.log(func(6));
