// convertToBaby.js

const convertToBaby = (array) => {
    let baby = [];   // here creating an empty array 
    for(let i = 0; i < array.length; i++){  // for loop used to iterate through the array
        baby.push(array[i] + 'baby');  // push method used to push baby string in the array
    }
    return baby;  // here returning the array
};

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];  // here creating an array

console.log(convertToBaby(animals)) // calling the function

