exports.addToNestedObject = (existingObject, array, value, objectTypeSymbol) => {
	if (array.length === 0) return existingObject;
	const key = array.shift();
	if (!existingObject[key]) existingObject[key] = {};
	if (array.length === 0) existingObject[key] = value;
	else exports.addToNestedObject(existingObject[key], array, value, objectTypeSymbol);
	existingObject[key][objectTypeSymbol] = 'object';
	return existingObject;
};
