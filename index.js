var recipes = {
  breakfast: "Eggs"
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({ [key]: value }, object);
}

function

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

console.log(recipes);