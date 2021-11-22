function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) {
    return obj;
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach((val) => {
    if (isObject(obj[val])) {
      target[val] = deepClone(obj[val], hash);
    } else {
      target[val] = obj[val];
    }
  });
  return target;
}
var obj1 = {
  a: 1,
  b: {
    a: 2,
  },
};

var obj2 = deepClone(obj1);
console.log(obj2);
