const array1 = [1, 3, 2];
const array2 = [1, 2, 3];
const array3 = [1, 2, 2];

const givenInteger1 = 3;
const givenInteger2 = 3;
const givenInteger3 = 3;

if (array1.length === givenInteger1 && isPermutation(array1, givenInteger1)) {
    console.log("Array 1 is a permutation of numbers from 1 to", givenInteger1);
} else {
    console.log("Array 1 is not a permutation of numbers from 1 to", givenInteger1);
}

if (array2.length === givenInteger2 && isPermutation(array2, givenInteger2)) {
    console.log("Array 2 is a permutation of numbers from 1 to", givenInteger2);
} else {
    console.log("Array 2 is not a permutation of numbers from 1 to", givenInteger2);
}

if (array3.length === givenInteger3 && isPermutation(array3, givenInteger3)) {
    console.log("Array 3 is a permutation of numbers from 1 to", givenInteger3);
} else {
    console.log("Array 3 is not a permutation of numbers from 1 to", givenInteger3);
}

function isPermutation(arr, n) {
    const seen = new Set();

    for (const num of arr) {
        if (num < 1 || num > n || seen.has(num)) {
            return false;
        }
        seen.add(num);
    }

    return true;
}
