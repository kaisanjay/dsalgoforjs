var x = 10;
a();
b();
console.log(x)

function a() {
    var x = 20;
    console.log(x)
}

function b() {
    var x = 200;
    console.log(x)
}

/* Stacks! */

// functions: push, pop, peek, length

var letters = []; // this is our stack
var rletters = []; // this is our stack


var word = "racecar";

var rword = "";

// put letters of word into stack
for(var i = 0; i < word.length; i++) {
    console.log(i)
    letters.push(word[i])
}

// pop off the stack in reverse order
for(var i = 0; i < word.length; i++) {
    var xoxo = letters.pop()
    rword += xoxo; // ReSanjay
    // rletters.push(letters.pop())
    // console.log(letters.pop())
}

if (rword === word) {
    console.log(word + " is a palindrome.");
 }
 else {
    console.log(word + " is not a palindrome.");
 }

