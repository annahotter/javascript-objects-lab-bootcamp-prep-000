var recipes = { prop: 1};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.prop2 = 2
  return recipes
}
