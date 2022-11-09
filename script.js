// while(num < 55) {
//   console.log(num);
//   num++;
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// let result = '';
// const lenght = 8;

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//       result += "*";
//   }

//   result += '\n';
// }
// console.log(result);

// // First task
// let num = 5;

// while (num <= 10) {
//   console.log(num);
//   num++;
// }
// // Second task
// for (let i = 20; i < 21; i--) {
//   if (i === 13) {
//     break;
//   }

//   console.log(i);
// }
// // Third task
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// // Fourth task
// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }

//  num = 2;
//  while (num <= 16 ) {
//    if (num % 2 === 0 ) {
//     num++;
//     continue;
//   } else {
//     console.log(num);
//     num++;
//   }
//  }

//Fifth task
//  const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;

//     const storeName = 'Films';

//     const storeDescription = {
//     budget: 10000,
//     employees: ['Ivan', 'Fedya', 'Bogdan'],
//     products: {
//         moloko: 1000,
//         hleb: 500
//     },
// };

// const a = ["a", "b", "c"];
// for (let i = 0; i < a.length; ++i) {
//     console.log(a[i]);
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.lenght; i++) {
//     result[i] = arr[i];
// }

// console.log(result);
// return result;

// const studentss = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
// ];

// function sortStudentsByGroup(arr) {
//   arr.sort();
//   const a = [],
//     b = [],
//     c = [],
//     rest = [];

//   for (let i = 0; i < arr.lenght; i++) {
//     if (i < 3) {
//       a.push(arr[i]);
//     } else if (i < 6) {
//       b.push(arr[i]);
//     } else if (i < 9) {
//       c.push(arr[i]);
//     } else {
//       rest.push(arr[i]);
//     }
//   }
//   return [
//     a,
//     b,
//     c,
//     `Оставшиеся студенты: ${rest.lenght === 0 ? "-" : rest.join(", ")}`,
//   ];
// }

// sortStudentsByGroup(students);
// console.log(sortStudentsByGroup(students));

// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   const a = [],
//     b = [],
//     c = [],
//     rest = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       a.push(arr[i]);
//     } else if (i < 6) {
//       b.push(arr[i]);
//     } else if (i < 9) {
//       c.push(arr[i]);
//     } else {
//       rest.push(arr[i]);
//     }
//   }
//   return [
//     a,
//     b,
//     c,
//     `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
//   ];
// }

// sortStudentsByGroups(students);
// console.log(sortStudentsByGroups(students));

// let number = 5;

// function choNumber() {
//   console.log(number);
// }
// number = 6;

// choNumber();

// console.log("a" > "b");

// function foo(a, b) {
//   const [first] = a;
//   const { eng } = b;

//   return `${first} ${eng}`;
// }

// const result = foo(["Hello", "Привет"], { ru: "Мир", eng: "World" });
// console.log(result);

// const restorantData = {
//   menu: [
//     {
//       name: "Salad Caesar",
//       price: "14$",
//     },
//     {
//       name: "Pizza Diavola",
//       price: "9$",
//     },
//     {
//       name: "Beefsteak",
//       price: "17$",
//     },
//     {
//       name: "Napoleon",
//       price: "7$",
//     },
//   ],
//   waitors: [
//     { name: "Alice", age: 22 },
//     { name: "John", age: 24 },
//   ],
//   averageLunchPrice: "20$",
//   openNow: true,
// };

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);

//   copy.waitors = [{ name: "Mike", age: 32 }];
//   return copy;
// }

// console.log(transferWaitors(restorantData));

// const boxx = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.querySelector('.circle');

// boxx.style.backgroundColor = 'blue';
// btns[1].style.borderRadius = '100%';
// circles.style.alignItems = 'bas';

// for (let i = 0; i < btns.length; i++) {
//     btns[i].style.borderRadius = '44%';
// }

// Array.from(btns).forEach(item => {
//     item.style.backgroundColor = 'green';
// });

// const btn = document.querySelectorAll("button");

// btn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('123');
//     });
// });

// btn.onclick = function () {
//     alert('hello btn');
// };
// let i = 0;
// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i == 3) {
//     btn.removeEventListener("click", deleteElement);
//   }
// };

// btn.addEventListener("click", deleteElement);

// const link = document.querySelector("a");

// link.addEventListener("click", (event) => {
//   event.preventDefault();

//   console.log(event.target);
// });

let students = {
  js: [
    {
      name: "Pablo",
      progress: 88
    },
    {
      name: "Dariya",
      progress: 16
    }
  ],

  html: {
    basic: [{
        name: "Peter",
        progress: 44
    }, {
        name: 'Ann',
        progress: 16
    }],

    pro: [{
        name: 'Sam',
        progress: 10
    }]
  }
};


function getTotalProgressByRecrution(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.lenght];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
        const subDataArr = getTotalProgressByRecrution(subData);
        total[0] += subDataArr[0];
        total[1] += subDataArr[1];
    }
    return total;
  }
}

const result = getTotalProgressByRecrution(students);

console.log(result[0]/result[1]);


function surfaceAreaCalculator(radius) {
    return 4 * 3.14 * square(radius);
}

function square(num) {
    return num * num;
}

const surfaceOfMars = surfaceAreaCalculator(10);
console.log(surfaceOfMars);

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const answer = factorial(3);
console.log(answer);

function pow (n, x) {
    let result1 = 1;

    for(let i = 0; i < x; i++) {
        result1 = result1 * n
    }
    return result1;
}
pow(3, 3);