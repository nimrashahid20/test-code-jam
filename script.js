

//........................Question:03..................................

// Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.
function reverseArray(arr) {
    return arr.reverse();
}
let smallArray = [1,2,3,4,5]
document.write("original small array:" + smallArray)
let reverseSmallArray = reverseArray([...smallArray])
document.write("<br>"+"reversed small array:"+ reverseSmallArray)

let largeArray = [10,20,30,40,50,60,70,80,90,100]
document.write("<br>"+"<br>"+"original large array is:"+largeArray)
let reverseLargeArray = reverseArray([...largeArray])
document.write("<br>"+"reverseb large array is:"+reverseLargeArray)


//.............................Question:02...........................

// Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

function filterNeagativeNumbers(arr){
    return arr.filter(number =>number >=0)
}

let arrayWithNegative = [1,-2,3,-4,5]
document.write("<br>"+"<br>"+"original array with negative  is:"+arrayWithNegative)

let filteredarray = filterNeagativeNumbers(arrayWithNegative)
document.write("<br>"+"the filtered array  is:"+filteredarray)


//.............................Questiopn:03............................

// Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.

function countVowels(str){
    const vowels ='aeiouAEIOU'
    let count = 0
    for(let i = 0 ;i > str.lenght; i++){
        if(vowels.includes(str[i])){
          count++;
        }
    }
return count;  
}

document.write("<br>"+"<br>"+"numbers of vowels in Hello World:"+countVowels('hello World'))
document.write("<br>"+"numbers of vowels in Java Script:"+countVowels('Java Script'))
document.write("<br>"+"numbers of vowels in Program:"+countVowels('program'))

//.............................Question:04.............................
 
// 4. Check if a string is a . A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.


function ispalindrome(str){
    str =  str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversestr = '';
    for(let i = str.length -1; i>=0; i--){
        reversestr += str[i];
    }
    return str === reversestr;
}
console.log(ispalindrome("kayak"));
console.log(ispalindrome("mom"));
console.log(ispalindrome("radar"));
console.log(ispalindrome("refer"));
console.log(ispalindrome("Refer"));


//......................................Question:05.........................................


// 5. Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.


function isrange (num1,num2){
    const numrange1 = (num1 >=50 && num1<=99);
    const numrange2 = (num2 >=50 && num2 <=99);
    return numrange1 || numrange2 // kisi ak ki bhi condition true  ho tu chalade ga 
}

  console.log(isrange(55, 100)); 
  console.log(isrange(49, 50));  
  console.log(isrange(30, 45));  
  console.log(isrange(99, 100)); 


//.....................................Question:06.....................................


// 6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.

let Numbers  = [1, 2, 3, 4, 5];
let changing = Numbers.map( n => n * 2);
let minValue = Math.min(...changing);
console.log(minValue);


//....................................Question:07.........................................

// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.


function isInRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}
console.log(isInRange(45, 75)); // true
console.log(isInRange(101, 25)); // false
console.log(isInRange(55, 60)); // true


//......................................Question:08........................................


// 8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}
console.log(angleType(45));  // Acute angle
console.log(angleType(90));  // Right angle
console.log(angleType(120)); // Obtuse angle
console.log(angleType(180)); // Straight angle
console.log(angleType(200)); // Invalid angle


//.........................................Question:09...........................................

// 9. Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.


function findSmallestRoundNumber(value) {
    const integerValue = Math.ceil(value);
    return Math.ceil(integerValue / 10) * 10;
  }
  console.log(findSmallestRoundNumber(123));   
  console.log(findSmallestRoundNumber(590));   
  console.log(findSmallestRoundNumber(9500));  
  console.log(findSmallestRoundNumber(452));   
  

//.....................................Question:10.........................................

function findIndexOfItem(arr, itemToFind) {
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === itemToFind) {
        return i;
      }
    }
    return -1;
  }
  const array = [10, 20, 30, 40, 50];
  console.log(findIndexOfItem(array, 30)); 
  console.log(findIndexOfItem(array, 100));










