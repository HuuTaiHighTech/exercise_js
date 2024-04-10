const increasingSequence = [1, 2, 3, 5, 8];
const decreasingSequence = [10, 7, 5, 3, 1];
const nonStrictSequence = [1, 2, 2, 3, 5];

let increasing = true;
let decreasing = true;

for (let i = 0; i < increasingSequence.length - 1; i++) {
    if (increasingSequence[i] >= increasingSequence[i + 1]) {
        increasing = false;
    }
}

for (let i = 0; i < decreasingSequence.length - 1; i++) {
    if (decreasingSequence[i] <= decreasingSequence[i + 1]) {
        decreasing = false;
    }
}

const isStrictlyIncreasingOrDecreasing = increasing || decreasing;

console.log("Is strictly increasing or decreasing:", isStrictlyIncreasingOrDecreasing);
