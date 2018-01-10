function flatArray (nestedArray) {
	var newArray = [];
	nestedArray.forEach((element) => {
		if (!Array.isArray(element) ) {
			newArray.push(element);
		} else {
			newArray = newArray.concat(flatArray(element));
		}
	});
	return newArray;
}

/* Example Usage */

var nestedArray = [[0,1],2,3,[4,5,6,[7,8],9],10];
var flattenarray = flatArray(nestedArray);
console.log('flattenarray', flattenarray);