/**
* This function flatens a nested array of integers
* @method flatArray
* @param {Array} nestedArray - this parameter is an array of integers that can be nested multiple times. 
* @return {Array} it will return a flatten array.
*/

function flatArray (nestedArray) {
	var newArray = [];

    if (!Array.isArray(nestedArray)) {
        throw "Parameter is not an array!";
    }

	nestedArray.forEach((element) => {
        if (Array.isArray(element)) {
            newArray = newArray.concat(flatArray(element));
        } else if (Number.isInteger(element)){
            newArray.push(element);
        } else {
            throw "Element within array is not an integer!";
        }
	});
    
	return newArray;
}

/* Example Usage, this code is only used for testing purposes */

try {
    var nestedArray = [[0,1],2,3,[4,5,6,[7,8],9],10];
    var flattenarray = flatArray(nestedArray);
    console.log('flattenarray', flattenarray); 
}
catch(error) {
  console.error(error);
}

try {
    var nestedArray2 = [[0,1],2,3,[4,5.86,6,[7,8],9],10];
    var flattenarray2 = flatArray(nestedArray2);
    console.log('flattenarray2', flattenarray);

}
catch(error) {
  console.error(error);
}

try {
    var nestedArray3 = 50;
    var flattenarray3 = flatArray(flattenarray3);
    console.log('flattenarray3', flattenarray3);

}
catch(error) {
  console.error(error);
}

try {
    var nestedArray4 = 'String case';
    var flattenarray4 = flatArray(flattenarray4);
    console.log('flattenarray4', flattenarray4);

}
catch(error) {
  console.error(error);
}