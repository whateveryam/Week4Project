// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.

console.log(ages [ages.length-1] - ages [0]);


// b. Add a new age to your array and repeat the step above to ensure it is dynamic.

ages.push (20);
console.log(ages);
console.log(ages [ages.length-1] - ages [0]);


// c. Use a loop to iterate through the array and calculate the average age.

let sum = 0;
for (i=0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum);

let averageOfArray = (sum/ages.length);
console.log(averageOfArray);


// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names =['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// a. Use a loop to iterate through the array and calculate the average number of letters per name.

let sumOfLetters = 0
for (let i = 0; i < names.length; i++); {
    sumOfLetters += names[i];
}
console.log(sumOfLetters);

let averageOfNames = (sum /names.length);
console.log(averageOfNames);

// 3. How do you access the last element of any array?
console.log(names[names.length-1]);

// 4. How do you access the first element of any array?
console.log(names[0]);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];


for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sumOfNameLengths = 0
for (let i= 0; i < nameLengths.length; i++ ) {
    sumOfNameLengths += nameLengths[i];
}
 console.log(sumOfNameLengths);

 //7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
 function thisIsAFunction (word, n) {
    let result = '';
    for (let i=0; i < n; i++) {
        result += word;
    }
    return result;
 }

 console.log(thisIsAFunction('Hi', 4));

 //8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function anotherFunction (firstName, lastName) {
return firstName + ' ' + lastName;
 }

 console.log(anotherFunction('bo', 'peep'));

 //9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

 function arrayFunction (numbers) {
    let sum= 0;
    for (i=0; i <numbers.length; i++) {
        sum += numbers[i];
    }

    if (sum >= 100) {
        return true
        } else {
            return false
        }
    }

 let numbersArray = [4, 6, 5, 2, 4, 5, 6, 7];

 let answer = arrayFunction(numbersArray);
 console.log(answer);

 //10. Write a function that takes an array of numbers and returns the average of all the elements in the array

function averageOfArray2 (numbers) {
    let sum = 0;
    for (i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    return average;

}

let answer2 = averageOfArray2 (numbersArray);
console.log(answer2);

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function twoArrays (array1, array2) {
    let average1 = array1.reduce((sum, num) => sum + num, 0) / array1.length;
    let average2 = array2.reduce((sum, num) => sum + num, 0) / array2.length;
return average1 > average2;
}

let firstArray = [4, 6, 88, 7 ];
let secondArray = [6, 2, 8, 7];

let result= twoArrays(firstArray, secondArray);
console.log(result);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside = true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

// I set this as false to make sure it was working, but it is still returning true. I'm not sure what's wrong here. I would change the names of the parameters, but the question asks for this. 

isHotOutside = false
moneyInPocket = 12.00

console.log(willBuyDrink(isHotOutside, moneyInPocket));

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function myFunction (a, b) {
    if ((a + b) < 100) {
        console.log('You did it!')
    } if ((a + b) === 100) {
        console.log('On the money!')
    } else {
        console.log('nope');
    }
}

let doesItWork = myFunction(1, 99);
console.log(doesItWork);