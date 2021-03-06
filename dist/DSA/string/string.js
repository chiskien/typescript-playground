"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinString = void 0;
var str2 = "The quick brown fox jumps over the lazy dog";
var str = "dog";
//String Access
str.charAt(1); // return "o"
// charAt(index) takes an index and return the character at the index location
str.substring(1, 2); //return "og"
//String comparison
var a = "a";
var b = "b";
var compare = a < b; // return true
var ab = "ab";
var ad = "ad";
compare = ab < ad; //return false
//String Search
//To find specific string within a string, use str.indexOf(searchValue[,fromIndex])
//this takes a param that is the string to be searched as well as an optional
//parameter for starting index for the search
//iF nothing found return -1
var strSearch1 = str.indexOf("d"); //return 0
strSearch1 = str.indexOf("Cate"); //return -1
strSearch1 = str.indexOf("g", 0); //return 2
//to check for the occurrence of the search string inside a larger string, simply
//check wether -1 was returned from index
function existInString(string, search) {
    return string.indexOf(search) !== -1;
}
// console.log(existInString(str, "d")); //return true
// console.log(existInString(str, "s")); //return false
//count word function
function countWord(string, value) {
    var count = 0;
    var position = string.indexOf(value);
    if (position === -1) {
        console.log("Not found word");
        return -1;
    }
    while (position !== -1) {
        count++;
        position = string.indexOf(value, position + 1);
    }
    return count;
}
//String decomposition
//for decomposing a string into parts, using str.split(seperator)
//it takes one parameter and create an array of substrings
var subStr2 = str2.split(" ");
//return ["The","quick","brown","fox","jumps","over".....]
//String replace
//.replace(string, replacedString) replaces a specified string
//within a string variable with another string
str.replace("d", "f"); // return "fog"
//Reversed string
function reversedString(str) {
    var reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }
    return reversedString;
}
//connect string
function joinString(str) {
    return str.join("&");
}
exports.joinString = joinString;
//# sourceMappingURL=string.js.map