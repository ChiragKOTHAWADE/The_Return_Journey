function findCommonElements(arr1, arr2) {
    const commonElements = [];

    // Iterate through each element in the first array
    for (let i = 0; i < arr1.length; i++) {
        const elem1 = arr1[i];

        // Check if the element is present in the second array and not already in the result
        if (arr2.includes(elem1) && !commonElements.includes(elem1)) {
            commonElements.push(elem1);
        }
    }

    return commonElements;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = findCommonElements(array1, array2);
console.log("Common Elements:", result);
