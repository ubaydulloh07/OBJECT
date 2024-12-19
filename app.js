// birinchi algaritm
const n = 3;
const obj = { a: 2, b: 3, c: 4 };

const res = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [key, value * n])
);

console.log("birinchi algaritm");
console.log(obj);
console.log(res);

// 1 chi algoritm end

// ikkinchi algoritm

const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false,
  },
  {
    title: "Dunyoning ishlari",
    author: "O’tkir Hoshimov",
    read: true,
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true,
  },
];

books.forEach((book) => {
  let noread = "o'qilmagan";
  if (book.read) {
    noread = "o'qilgan";
  }

  console.log("ikkinchi algoritm");
  console.log(`${book.author} ning ${book.title} kitobi ${noread}`);
});

// ikkinchi algoritm end

// uchinchi algoritm

const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

const result = animals.reduce((acc, animal) => {
  if (acc[animal]) {
    acc[animal]++;
  } else {
    acc[animal] = 1;
  }
  return acc;
}, {});

console.log("uchinchi algaritm");
console.log(animals);

console.log(result);

// uchinchi algoritm end

// tortinchi algoritm

const odam = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jennifer", age: 65 },
];

const sort = odam.sort((a, b) => a.age - b.age);
const natija = sort[sort.length - 1].age - sort[0].age;

console.log("tortinchi  algaritm");
console.log(odam);

console.log("eng qari odam va eng yoshli odam orasidagi farq", natija);

// tortinchi algoritm end

// 5 algoritm

function word(a) {
  const words = a.split(" ");
  const minWord = words.reduce((a, b) => (a.length <= b.length ? a : b));
  const maxWord = words.reduce((a, b) => (a.length >= b.length ? a : b));
  return { minWord, maxWord };
}
const soz = word("Men dasturlash kursida o'qiyman");
console.log("5 chi  algaritm");

console.log("Men dasturlash kursida o'qiyman");

console.log(soz);

// 5 algoritm end

// 9 algoritm

function uzunligi(number) {
  return number.toString().replace("-", "").length;
}
const son = 12345;
console.log("9 chi  algaritm");
console.log("son", son);

console.log(" sonni uzunligi", uzunligi(son));

// 9 algoritm end

// 10 algoritm

function teskari(number) {
  const teskari = number.toString().split("").reverse().join("");
  return parseInt(teskari) * Math.sign(number);
}

let num = 123;

console.log("10 chi  algaritm");

console.log("son", num);

console.log("teskari son", teskari(num));

// 10 algoritm end
