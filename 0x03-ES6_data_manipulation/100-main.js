// create a new instance of WeakMap
const weakMap = new WeakMap();
// define the queryAPI function
export default function queryAPI(endpoint) {
  // check if the endpoint has been queried before
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    // if the endpoint has been queried
    if (count >= 5) {
      throw new Error("Endpoint load is high");
    }
    // otherwise, update the count for the endpoint
    weakMap.set(endpoint, count + 1);
  } else {
    // if the endpoint hasn't been queried set the count to 1
    weakMap.set(endpoint, 1);
  }
  return weakMap;
}

// export the weakMap and queryAPI function
export { weakMap, queryAPI };
