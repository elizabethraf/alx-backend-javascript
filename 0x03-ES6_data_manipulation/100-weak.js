const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  weakMap.set(endpoint, weakMap.get(endpoint) + 1 || 1);
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
  return weakMap;
}
export { weakMap, queryAPI };
