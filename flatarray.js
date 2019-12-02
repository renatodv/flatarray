/**
* This function flatens a nested array of integers
* @method flatArray
* @param {Array} nestedArray - this parameter is an array of integers that can be nested multiple times. 
* @return {Array} it will return a flatten array.
*/

function flatArray (nestedArray) {
	var newArray = [];
	nestedArray.forEach((element) => {
        if (Array.isArray(element)) {
            newArray = newArray.concat(flatArray(element));
        } else {
            newArray.push(element);
        }
	});
	return newArray;
}

/* Example Usage, this code is only used for testing purposes*/

var nestedArray = [[0,1],2,3,[4,5,6,[7,8],9],10];
var flattenarray = flatArray(nestedArray);
console.log('flattenarray', flattenarray);