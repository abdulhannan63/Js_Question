// Write a JavaScript program to find the largest element in a nested array
// Example: [[1, 2, 3], [4, 5, 6],[7, 8, 9]]
function func(num) {
    let max = num[0][0];
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num[i].length; j++) {
            if (num[i][j] > max) {
                max = num[i][j];
            }
        }
    }
    return max;
}

var a = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];
console.log(func(a));

