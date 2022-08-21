/**
 * There is a list of  character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at index . 
 * There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in  
 * assuming all letters are  wide.

Example
 

The heights are  and . The tallest letter is  high and there are  letters. The hightlighted area will be  so the answer is .

Function Description
Complete the designerPdfViewer function in the editor below.

designerPdfViewer has the following parameter(s):

int h[26]: the heights of each letter
string word: a string
Returns

int: the size of the highlighted area
Input Format

The first line contains  space-separated integers describing the respective heights of each consecutive lowercase English letter, ascii[a-z].
The second line contains a single word consisting of lowercase English alphabetic letters.

Constraints

, where  is an English lowercase letter.
 contains no more than  letters.
Sample Input 0

1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
abc
Sample Output 0

9
Explanation 0

We are highlighting the word abc:

Letter heights are ,  and . The tallest letter, b, is  high. The selection area for this word is .

Note: Recall that the width of each character is .

Sample Input 1

1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
zaba
Sample Output 1

28
Explanation 1

The tallest letter in  is  at . The selection area for this word is .
 */

function getRectSize(str, ar) {
  if (str === null || str === " ") {
    return null;
  }

  str = str.trim();
  let maxH = 0;
  for (let i = 0; i < str.length; i++) {
    let val = getValueOfChar(str[i]);
    if (ar[val] > maxH) {
      maxH = ar[val];
    }
  }

  return maxH * str.length;
}

function getValueOfChar(c) {
  let val = c.charCodeAt(0);
  let temp_val = 97; //for lower case
  // let temp_val = 65; //for upper case
  return val - temp_val;
}

let h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
console.log(getRectSize("zaba", h));
