const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = []; // Create an empty array to store the results
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {  // Loop through each element in the array
    let number = arr[i];   // Store the current element in a variable

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    j = 1;   //here j is initialized to 1 what is j used to find the smallest power of 2 greater than the given number
    while (j < number) {   // while loop is used to find the smallest power of 2 greater than the given number
      j = j * 2;   // j is multiplied by 2 and stored in j variable 
    }
    results.push(j);  // push the smallest power of 2 greater than the given number in the results array
  }
  return results;  // return the results array
};

console.log(smallestPowerOfTwo(numbers));  // calling the function