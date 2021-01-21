// starting set
let books = new Set();

books.add("Data Structure");
books.add("Algorithm Introduction");
books.add("Object Oriented Programming Language");
books.add("Data Structure");
//  set is unique so that data structure wont show up
console.log(books);

console.log(books.size);

console.log("check Data Structure is available or not : ", books.has("Data Structure"));
books.forEach(function (item) {
    console .log(item);
});