// make mixed array
var mixedType = [1, "Apple", 2, "Mango", 3, "orange"];
//pick only string or words
var stringsArray = mixedType.filter(function (item) { return typeof item === "string"; });
// console
console.log(stringsArray);
//this check only string type 
