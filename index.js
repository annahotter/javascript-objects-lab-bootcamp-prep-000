var recipes = { prop: 1};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.prop3 = 3
  return recipes
}
