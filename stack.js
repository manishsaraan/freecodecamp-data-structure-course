// stacks
// functions push, pop, peek, length

var letters = []; //out stack
var word = "racecar";
var rword = "";

// put letters in stack
for (let i = 0, len = word.length; i < len; i++) {
  letters.push(word[i]);
}

// pop of the stack in reverse order
for (let i = 0, len = word.length; i < len; i++) {
  rword += letters.pop();
}

if (word === rword) {
  console.log(`${word} is palindrome`);
} else {
  console.log(`${word} is not palindrome`);
}
