function findUniqueElements(inputArray) {
    var uniqueArray = [];
  
    for (var i = 0; i < inputArray.length; i++) {
      var currentElement = inputArray[i];
      var isUnique = true;
  
      for (var j = 0; j < uniqueArray.length; j++) {
        if (currentElement === uniqueArray[j]) {
          isUnique = false;
          break;
        }
      }
  
      if (isUnique) {
        uniqueArray.push(currentElement);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  var inputArray = [1, 2, 3, 4, 2, 1, 5, 6, 7, 7];
  var resultArray = findUniqueElements(inputArray);
  console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6, 7]
  