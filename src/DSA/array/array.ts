let champions: string[] = [
  "Sylas",
  "Yone",
  "Irelia",
  "Cassiopeia",
  "Akali",
  "Kled",
  "Ryze",
];
//Insertion
//.push() => adds a new element at the end of the array
champions.push("Pantheon");
//.unshift => adds a new element at the head of the array
champions.unshift("Thresh");

//Deletion
// .pop() => removes the last-added element of an array, this also return removed element
champions.pop();
//.shift() => removes the first element of an array
champions.shift();

//Access
champions[2]; //return "Irelia"
champions[5]; //return "Kled"

//Helper Function

//.slice(begin, end)
//return a portion of an existing array without modifying the array
//.slice takes two parameters: the beginning index and the ending index of an array
champions.slice(1, 3); //return ["Yone","Irelia","Cassiopeia"]
champions.slice(1); //return all except element at index 1

//.splice(begin,size, element1, element2....)
//.splice returns and changes the content of an array by removing existing elements
//and/or adding new elements
