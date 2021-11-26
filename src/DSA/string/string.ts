const str2: string = "The quick brown fox jumps over the lazy dog";
const str: string = "dog";

//String Access
str.charAt(1); // return "o"
// charAt(index) takes an index and return the character at the index location
str.substring(1, 2); //return "og"

//String comparison
let a = "a";
let b = "b";
let compare = a < b; // return true
let ab = "ab";
let ad = "ad";
compare = ab < ad; //return false

//String Search
//To find specific string within a string, use str.indexOf(searchValue[,fromIndex])
//this takes a param that is the string to be searched as well as an optional
//parameter for starting index for the search
//iF nothing found return -1
let strSearch1 = str.indexOf("d"); //return 0
strSearch1 = str.indexOf("Cate"); //return -1
strSearch1 = str.indexOf("g", 0); //return 2

//to check for the occurrence of the search string inside a larger string, simply
//check wether -1 was returned from index
function existInString(string: string, search: string): boolean {
  return string.indexOf(search) !== -1;
}
// console.log(existInString(str, "d")); //return true
// console.log(existInString(str, "s")); //return false

//count word function

function countWord(string: string, value: string): number {
  let count = 0;
  let position: number = string.indexOf(value);
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
let subStr2: string[] = str2.split(" ");
//return ["The","quick","brown","fox","jumps","over".....]

//String replace
//.replace(string, replacedString) replaces a specified string
//within a string variable with another string
str.replace("d", "f"); // return "fog"

//Reversed string
function reversedString(str: string) {
  let reversedString: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str.charAt(i);
  }
  return reversedString;
}

//connect string
export function joinString(str: string[]): string {
  return str.join("&");
}
