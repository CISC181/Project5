//  Compile the code with
//  tsc using-ts.ts
//  Run the code by opening index.html in browser.  F12, go to console to see output
console.log("**************************************************************");
var fruits;
fruits = ["Orange", "Banana", "Apple"];
console.log("* Array 1:   ***************************************************");
//  Access an element of the array
console.log("Array at index 2: " + fruits[2]);
console.log("* Array 2:   ***************************************************");
//  Use a for/each loop to iterate an array
for (var index in fruits) {
    console.log(fruits[index]); // output: Apple Orange Banana
}
console.log("* Array 3:   ***************************************************");
//  Use a for/next loop to iterate an array
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}
//  Weird stuff you can do to an array.  Be warned!  This stuff doesn't work in any other language
console.log("* Array 4:   ***************************************************");
console.log("Items in array before pop: " + fruits.length);
var itm = fruits.pop();
console.log("Item popped:" + itm);
console.log("Items in array after pop: " + fruits.length);
console.log("* Array 5:   ***************************************************");
fruits.push("Pineapple");
console.log("Items in array after push: " + fruits.length);
console.log("* Array 6:   ***************************************************");
console.log("* Before Sort:   ***************************************************");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}
//  Sorting array
fruits.sort();
console.log("* After Sort:   ***************************************************");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}
//  Array includes item?
console.log("* Array 7:   ***************************************************");
console.log("Does array include Orange? " + fruits.includes("Orange"));
console.log("Does array include Orange? " + fruits.includes("Pear"));
//  ToString function
console.log("* Array 8:   ***************************************************");
console.log(fruits.toString());
//  Concatinate with more elements
console.log("* Array 9:   ***************************************************");
fruits = fruits.concat(["Fig", "Mango"]);
console.log(fruits);
//  Adding second banana
console.log("* Array 10:   ***************************************************");
fruits.push("Banana");
console.log(fruits.toString());
console.log(fruits.lastIndexOf("Banana"));
console.log(fruits.indexOf("Banana")); //  Finds first banana index
console.log(fruits.lastIndexOf("Fish")); //  returns -1, doesn't include element
//  More goofy arrays
var values = ["Apple", 2, "Orange", 3, 4, "Banana"];
//  This array has two types.. string and number
for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === "number") {
        console.log("This is a number: " + values[i]);
    }
    else if (typeof values[i] === "string") {
        console.log("This is a string: " + values[i]);
    }
}
