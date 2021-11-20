function init() {}

console.log(Object.create(init.prototype));
console.log(Symbol() == Symbol());
console.log(Object.create(init.prototype) == Object.create(init.prototype));
