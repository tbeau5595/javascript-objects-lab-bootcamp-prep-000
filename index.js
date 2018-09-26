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


console.log(recipes);