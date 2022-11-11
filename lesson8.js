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
//считает суммы только по порядку, а не вразнобой

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
//я так понимаю тут должны быть числа через пробел или все таки строка?

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
// console.log(sumTen([1, 3, 8, 9]));
// считает только элементы до 10, а д

//11
const fillArr = (n, length) => {
    let newArr = new Array(length)
    newArr.fill(n, 0, length);
    return newArr
}
// console.log(fillArr("x", 10));