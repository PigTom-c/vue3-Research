function init() {}

console.log(Object.create(init.prototype));
console.log(Symbol() == Symbol());
console.log(Object.create(init.prototype) == Object.create(init.prototype));

const symbolValueOf = Symbol.prototype.valueOf;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return Object(symbolValueOf.call(symbol));
}
