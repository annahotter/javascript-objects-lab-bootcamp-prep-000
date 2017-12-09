var recipes = { cake: 'flour',
pasta: 'sauce'};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { meatloaf: 'beef' })
}
