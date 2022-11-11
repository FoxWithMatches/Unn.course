//lesson practice

//1
// const evenNum = (num) => 
//   num.reduce((prev, cur) => {
//         if(cur > 0 && cur % 2 === 0) {
//             return prev + cur;
//         }
//         return prev;
//     }, 0);
// console.log(evenNum([1, -5, 2, 4, 8, 3]));

const evenNum = (num) => num.filter((el) => el > 0 && el % 2 === 0)
    .reduce((prev, cur) => prev + cur)
// console.log(evenNum([1, -5, 2, 4, 8, 3]));

//2
// const repeatNum = (num) => num.filter((el, i, array) => !array.includes(el, i +1))
const repeatNum = (num) => {
    let arr = num.filter((item, pos) => {
        return num.indexOf(item) === pos;
    })
    return arr;
}
// console.log(repeatNum([1, 6, 1, 4, 6, 1]));

//3
const twoArr = (arr1, arr2) => {
    let a = arr1.join("")
    let b = arr2.join("")
    if (a === b) {
        return true;
    }
    return false
}
// console.log(twoArr([1,1,2,1], [1,1,1]));

//4
const multiArr = [1, 2, [3, 4, 5, [6, 7, 8, ]], 9, 10, [11, 12,[13, 14, 15]]];
const flatArrTwo = multiArr.flat(Infinity);
const flatArr = (arr) => 
    arr
    .toString()
    .split()
    .map((el) => +el)

// console.log(flatArr(multiArr));
// console.log(flatArrTwo);

//lesson practice 05/11/22
const user = {name: "Alice"};
// const user2 = Object.assign({}, user, {favoriteColor : "red", city : "NN"})
const user2 = {...user}
user.age = 18
user2.name = "Ivan"
// console.log(user);
// console.log(user2);

let arr = [1, 2, 3];
let arr2 = [...arr];
arr.push(4)
// console.log(arr);
// console.log(arr2);

const user3 = JSON.parse(JSON.stringify(user))
// console.log(user3);

const infinitySum = (a, b,...arg) => {
    return a + b + arg.reduce((prev, cur) => prev + cur, 0)
};
// console.log(infinitySum(1, 23, 5, 4));  

//for of
const arraySum = (arr) => {
    let res = 0;
    for (let value of arr) {
        res += value
    }
    return res
}
// console.log(arraySum([1, 2, 3]));
// const obj = {name: "Alice", age: 18}
// for (let value in obj) {
//     console.log(value);
// }

//classwork7(8)
//1
const admin = {name: "Pavel", age: 34, city: "Niznyi Novgorod", married: true}
const userAdmin = Object.assign({}, admin)
const userAdmin2 = {...admin}
userAdmin2.married = false
userAdmin.city = "Moscow"
// console.log(admin);
// console.log(userAdmin);
// console.log(userAdmin2);

//2
const resSum = (...arg) => {
    let res = 0;
    for (let value of arg) {
        if (value % 2 === 0) {
            res += value
        }
    }
    return res
}
// console.log(resSum(1, 2, 3, 4));

//3
const twoArray = (arr1, arr2) => {
    let arr3 = [...arr1, ...arr2]
    return arr3.filter((el, i, array) => array.includes(el, i+1))
}
// console.log(twoArray([1, 2, 3], [3, 4, 5, 1]));

const numeric = ["1", "2", "3"]
// console.log(numeric.reverse());

//hw7
//1
const lengthString = (arr) => {
    return arr.map((el) => el.length)
}
// console.log(lengthString(["Alice", "Pavel", "Oleg", "Sofi"]));

//2
const numbers = [2, 3, 5, 7, 11, 13, 17, 19]
const currentSums = (numbers) => {
    const newNum = numbers.reduce((prev, cur) => prev + cur, 0)
    return numbers.fill(newNum, 0, numbers.length)

}
// console.log(currentSums(numbers));

//3--------
const summN = (arr) => {
    let arr2 = []
    arr.reduce((prev, cur) => {
        if (prev + cur === 7) {
          arr2.push([prev, cur])
        }
        return cur
    }, 0)
    return arr2
}

// console.log(summN([1, 6, 3, 4, 5, 7, 0, 2]));

//4
const arrStr = (str) => {
    let newArr = str.split(" ")
    let newStr = [];
    for (let value of newArr) {
        newStr.push(value[0])
    }
    return newStr
}
// console.log(arrStr("Hello world my name is Alice"));

//5---------

//6
const numbersOfAscending = (arr) => arr.sort((a, b) => b - a)
// console.log(numbersOfAscending([1, 5, 2, 10, 3, 6]));

//7--------
const threeArr = (arr1, arr2, arr3) => {
    let newArr = [...arr1, ...arr2, ...arr3]
    newArr.sort((a, b) => b - a)
    return newArr.join(" ").split()
    
}
// console.log(threeArr([1, 4, 5], [2, 7], [0, 20]));

//8
const sumEl = (arr) =>  arr.flat(Infinity).reduce((prev, cur) => prev + cur, 0)
// console.log(sumEl([[1, 2, 3], [4, 5], [6]]));

//9
const notReverse = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    return newArr
}
// console.log(notReverse([1, 2, 3, 4, 5]));

//10--------
const sumTen = (arr) => {
    let newArr = []
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        if (res < 10) {
           res += arr[i] + arr[i + 1]
           newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(sumTen([1, 3, 8, 9]));

//11
const fillArr = (n, length) => {
    let newArr = new Array(length)
    newArr.fill(n, 0, length);
    return newArr
}
// console.log(fillArr("x", 10));