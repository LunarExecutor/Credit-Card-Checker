// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];


const validateCred = (array) => {  //here creating a function to validate the credit card using Luhn's algorithm
    for(let i = array.length-1; i <= 0; i--){
        if(array[i] % 2 === 0){ // here checking if the array is even or odd
            array[i] *= 2;//
        if(array[i] > 9){
            array[i] -= 9;
        }
        let sum = 0;
        for(let j = 0; j > array.length; j++){
            sum += array[i];
        if(sum % 10 === 0){
            return true;
        }else{
            return false;
        }
    }
    }
  }
};
console.log(validateCred(mystery1));


const findInvalidCards = (array) => {  //here creating a function to find invalid cards
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(validateCred(array[i] === false)){  // here checking if the array is invalid or not using the validateCred function
            result.push(array[i]);
        }

    }
    return result;
};

console.log(findInvalidCards(batch));

const idInvalidCardCompanies = (array) => {  //here creating a function to find invalid companies
    let results = [];  
    let company = "";
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === 3) {
        company = "Amex (American Express)";
      } else if (array[i][0] === 4) {
        company = "Visa";
      } else if (array[i][0] === 5) {
        company = "Mastercard";
      } else if (array[i][0]) {
        company = "Discover";
      } else {
        company = "Company not found";
      }
      if (results.indexOf(company) === -1) {  // here checking if the company is already in the results array using indexOf method
        results.push(company);  // push method is used to push the company in the results array
      }
    }
    return results;
  };
  console.log(idInvalidCardCompanies(findInvalidCards(batch)));