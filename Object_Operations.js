// Define a car object
var car1 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
  };
  
  // Define another car object
  var car2 = {
    brand: 'Honda',
    model: 'Civic',
    year: 2019
  };
  
  // Function to merge two car objects
  function mergeCars(car1, car2) {
    // Create a new object to store the merged properties
    var mergedCar = {};
  
    // Copy properties from the first car
    for (var key in car1) {
      if (car1.hasOwnProperty(key)) {
        mergedCar[key] = car1[key];
      }
    }
  
    // Copy properties from the second car, if they don't already exist
    for (var key in car2) {
      if (car2.hasOwnProperty(key) && !mergedCar.hasOwnProperty(key)) {
        mergedCar[key] = car2[key];
      }
    }
  
    return mergedCar;
  }
  
  // Merge the two cars
  var mergedCar = mergeCars(car1, car2);
  
  // Display the merged car object
  console.log(mergedCar);
  