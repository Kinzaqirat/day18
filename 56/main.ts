// make mixed array
let mixedType= [1, "Apple", 2, "Mango", 3, "orange"];
//pick only string or words
let stringsArray = mixedType.filter(item => typeof item === "string");
// console
console.log(stringsArray);
//this check only string type 
