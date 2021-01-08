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


var word = "racecar";
// var word = prompt("Please enter your name", "Harry Potter") || "racecar";

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
}

if (rword === word) {
    console.log(word + " is a palindrome.");
 }
 else {
    console.log(word + " is not a palindrome.");
 }

 // Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage= {};

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++; 
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }

    this.size = function() {
        return this.count;
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("HarryPotter");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


