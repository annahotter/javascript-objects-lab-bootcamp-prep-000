var recipes = { prop: '1'};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { prop2: '2' })
}

var recipes = { prop: '1',
prop2: '2',
prop3: '3'};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.prop3 = '3';
  return recipes
}
