// Write a JavaScript program to change the string to title (first letter of every word should be in upper case)
function func(str) {
    var arr = str.split(" ");
    var a= arr.map((e)=>{
        return e[0].toUpperCase()+e.slice(1);
    })
    return a.join(" ");
}
// Test the function
console.log(func("hello world"));
// function capitalizeFirstLetterOfEachWord(str) {
//     const words = str.split(" ");
//     const capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(" ");
// }
// const inputString = "hello world this is a sample string";
// const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
// console.log("Capitalized string:", capitalizedString);
