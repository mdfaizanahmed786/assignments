/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return largestNumber;

}

const arr = [1, 2, 3, 4, 4];
// This method will mutate the array..
arr.fill(1, 2);

console.log(arr)

// The below method will reverse the array 
console.log(arr.reverse())


const persons = [
    {
        name: "John", age: 78
    },
    {
        name: "Faizan", age: 21,

    },
    {
        name: "Saqlain", age: 56
    }
]

// This is useful for array of objects..
// Object.grouBy(persons, person=>person.name)

// Some extra methods:
// persons.findLast(p=>p=="some value") this is useful to find an element from backwards.. and same for reduceLast
// and also arr.toSpliced()

// The below method will return a new array unlike reverse
// const newArray=persons.toReversed();

// toSorted() method will return an new array instead of mutating, unlike array.sort()

const twoDArray = [[1, 2], [3, 4], [5, 6], [[3], [7, 8, 9, 9]]]
// The below one will decide how much depth we are trying to go inside..
// Number.POSITIVE_INFINITY helps to go inside more deeper... (that is depth inside..)
console.log(twoDArray.flat(Number.POSITIVE_INFINITY))



module.exports = findLargestElement;