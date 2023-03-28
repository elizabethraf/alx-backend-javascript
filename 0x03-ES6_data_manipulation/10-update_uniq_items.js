export default function updateUniqueItems(myMap) {
  // check if argument is a map
  if (typeof myMap !== 'object' || myMap === null || Array.isArray(myMap)) {
    throw new Error('Cannot process');
  }

  // create a new object
  const updatedMap = {};

  // loop through the map
  for (const [item, quantity] of Object.entries(myMap)) {
    updatedMap[item] = quantity === 1 ? 100 : quantity;
  }

  // return the updated map
  return updatedMap;
}
