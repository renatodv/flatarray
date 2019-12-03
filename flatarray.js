/**
 * This function flatens a nested array of integers
 * @method flatArray
 * @param {Array} nestedArray - this parameter is an array of integers that can be nested multiple times.
 * @return {Array} it will return a flatten array.
 */

function flatArray(nestedArray) {
  var newArray = [];

  if (!Array.isArray(nestedArray)) {
    throw "Parameter is not an array!";
  }

  nestedArray.forEach((element) => {
    if (Array.isArray(element)) {
      newArray = newArray.concat(flatArray(element));
    } else if (Number.isInteger(element)) {
      newArray.push(element);
    } else {
      throw "Element within array is not an integer!";
    }
  });

  return newArray;
}



/* Example Usage, this code is only used for testing purposes */
/* If you would like to test this code using node try: "node flatarray.js" */

var nestedArray = [
    [0, 1], 2, 3, [4, 5, 6, [7, 8], 9], 10
  ],
  nestedArray2 = [
    [0, 1], 2, 3, [4, 5.86, 6, [7, 8], 9], 10
  ],
  nestedArray3 = 50,
  nestedArray4 = 'String case',
  nestedArray5 = null,
  multipleCases = [nestedArray, nestedArray2, nestedArray3, nestedArray4, nestedArray5];

multipleCases.forEach(function(singleCase) {
  try {
    var flattenarray = flatArray(singleCase);
    console.log('flattenarray', flattenarray);
  } catch (error) {
    console.error(error);
  }
});
