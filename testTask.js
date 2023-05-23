// Part#1 - Strings

const text = 'I am a master at strings';

// 1 - Replace first occurrence of 'a' with the letter 'z'
console.log(text.replace('a', 'z'));

// 2 - Replace all occurrences of 'a' with the letter 'z'
console.log(text.replace(/a/g, 'z'));

// 3 - Print 0-based position of the first letter 'm'
console.log(text.indexOf('m'));

//Part#2 - arrays 

const list = [2, 6, 3, 7, 9];

// 4 - Sum only the ODD numbers in the list
let oddSum = 0;
for (let i = 0; i < list.length; i++) {
  if (list[i] % 2 !== 0) {
    oddSum += list[i];
  }
}
console.log(oddSum);

// 5 - Sort the list highest to lowest
const sorted = Array.from(list).sort((a, b) => b - a);
console.log(sorted);

// 6 - Print the numbers in a ~ delimited string like '1~2~3'
let delimited = '';
for (let i = 0; i < list.length; i++) {
  delimited += list[i];
  if (i !== list.length - 1) {
    delimited += '~';
  }
}
console.log(delimited);