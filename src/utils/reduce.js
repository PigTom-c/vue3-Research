// reduce 二维数组转成一位数组
const flattened = [
  [{ num: 0 }, { num: 1 }],
  [{ num: 2 }, { num: 3 }],
  [{ num: 4 }, { num: 5 }],
].reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(flattened);

// reduce 统计相同的值
const names = [
  { name: 'Alice' },
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Tiff' },
  { name: 'Bruce' },
  { name: 'Alice' },
];

const countedNames = names.reduce((allNames, name) => {
  if (name.name in allNames) {
    allNames[name.name]++;
  } else {
    allNames[name.name] = 1;
  }
  return allNames;
}, {});

console.info(countedNames);

// reduce 根据 property 分类
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj.name);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');

console.log(groupedPeople);

// 使用扩展运算符和initialValue绑定包含在对象数组中的数组
// friends - 对象数组
// where object field "books" - list of favorite books
var friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21,
  },
  {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26,
  },
  {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(
  (prev, curr) => {
    return [...prev, ...curr.books];
  },
  ['Alphabet']
);
console.log(allbooks);

// 数组去重
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let myArrays = Array.from(new Set(myArray));
console.log(myArrays);
