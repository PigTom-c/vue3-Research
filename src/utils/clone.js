var regex = /hui/g;
console.log(regex.test('hui'));
console.log(regex.test('hui'));
console.log(regex.test('hui'));
console.log(regex.test('hui'));

function cloneReg(target, isDeep) {
  var regFlag = /\w%$/;
  var result = new target.constructor(target.source, regFlag.exec(target));
  if (isDeep) {
    result.lastIndex = 0;
  } else {
    result.lastIndex = target.lastIndex;
  }
}

var regex = /hui/g;
var reg2 = cloneReg(regex, true);
console.log(reg2);
