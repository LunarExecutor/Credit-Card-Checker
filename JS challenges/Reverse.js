//creating reverse Array

const reverseArray = (array) => {
    let reverse  = [];         // here creating an empty array 
    for(let i = array.length-1; i >= 0; i--){  // array.length-1 is used to get the last index of the array 
                                               // i >= 0 is used to get the last index of the array
                                               // i-- is used to decrement the index

                                               
//Initialization (let i = arr.length - 1): The loop starts with i set to the index of the last element of the array.
// Arrays are zero-indexed in JavaScript, so the index of the last element is arr.length - 1.


        reverse.push(array[i]);  // push method is used to push the array in reverse order in reverse array 
    }
    return reverse;  // here returning the reverse array 
};

const sentence = ['Alagha', 'Luna']; // here creating an array 
console.log(reverseArray(sentence));  //now calling the function 

/*

Let's take a specific example of a string array and walk through how the reverseArray function would reverse its elements. Suppose we have the following array of strings:

javascript
Copy code
const exampleArray = ["apple", "banana", "cherry", "date", "elderberry"];
We'll reverse this array using the reverseArray function, which is the same as we discussed before:

javascript
Copy code
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
Here's the step-by-step process with our string array, exampleArray:

Initialization: The reverseArray function initializes an empty array named reversed.

For Loop Begins:

Initialization Step: The loop starts with i set to arr.length - 1, which is 4 for exampleArray (exampleArray[4] is "elderberry", the last element).
First Iteration (i = 4):

The loop checks the condition i >= 0, which is true for i = 4.
arr[i] refers to exampleArray[4], which is "elderberry". This string is pushed into the reversed array.
i-- is executed, decrementing i to 3.
Second Iteration (i = 3):

The condition i >= 0 is true for i = 3.
arr[i] refers to exampleArray[3], which is "date". This string is pushed into the reversed array.
i is decremented to 2.
Continuing Iterations:

The process continues, with i taking the values 2 (pushing "cherry"), 1 (pushing "banana"), and finally 0 (pushing "apple"), each time pushing exampleArray[i] into reversed.
Last Iteration (i = 0):

The condition i >= 0 is true for the last time.
arr[i] refers to exampleArray[0], which is "apple". This is pushed into reversed.
After this iteration, i is decremented to -1.
Loop Ends: The condition i >= 0 is no longer true (-1 >= 0 is false), so the loop exits.

Return reversed: The function returns the reversed array, now containing ["elderberry", "date", "cherry", "banana", "apple"], which is the reverse of the original exampleArray.

Function Call:

When reverseArray(exampleArray) is called, it effectively returns the reversed string array ["elderberry", "date", "cherry", "banana", "apple"].
By iterating from the end of the original array and pushing each string into a new array, we've reversed the order of the strings. This approach creates a new array with the elements in reverse order, leaving the original array unchanged.
*/