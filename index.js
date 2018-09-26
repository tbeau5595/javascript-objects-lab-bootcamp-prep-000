var recipes = {
  breakfast: "Eggs"
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({ [key]: value }, object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
  return delete object[key];
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

console.log(recipes);