// const userName = "alice";

// const result = userName === "alice" ?  `hello ${userName}` : "Hola";
// console.log(result);

// const a = 50;
// const b = 200;
// const c = 100;

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else if (c > a && c > b) {
//     console.log(c);
// };

// if (a < b) {
//     b < c ? console.log("c") : console.log("b");
// } else {
//     a < c ? console.log("c") : console.log("a");
// }

// let role = "manager";

// switch (role) {
//     case "admin": console.log("you are admin");
//     break;
//     case "manager": console.log("you are manager");
//     break;
//     case "user": console.log("you are user");
//     break;
// }

// let deg = -30;
// if (deg <= 30) {
//     console.log("Оставайтесь дома" + deg);
// } else if (deg <= -10 && deg > -30) {
//     console.log("Сегодня холодно" + deg);
// } else if (deg <= 5 && deg > -10) {
//     console.log("Не холодно" + deg);
// } else if (deg <= 15 && deg > 5) {
//     console.log("Тепло" + deg);
// } else if (deg <= 25 && deg > 15) {
//     console.log("Очень тепло");
// } else if (deg < 35 && deg > 25) {
//     console.log("Жарко" + deg);
// } else if (deg >= 35) {
//     console.log("Пекло" + deg);
// }

// let i = 0;

// for (; i < 3; i++) {
//     console.log(i);
// }

// let myStr = "Alice in Wonderland";

// for (i = 0; i < 3; i++) {
//     // console.log(myStr);
// }

// let a = "1";

// if (a === 1) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// let test = false;

// test !== true ? console.log("true") : console.log("false");

// if (test !== true) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// let a = 1;
// let b = 4;

// if (a > 0 && a < 5) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// if (a === 0 || a === 2) {
//     console.log(a + 7);
// } else {    
//     console.log(a / 10)
// }

// if (a <= 1 && b >= 3) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// let num = 3;
// let result = "";

// switch (num) {
//     case 1: result = "winter"
//     console.log(result);
//     break;
//     case 2: result = "spring";
//     console.log(result);
//     break;
//     case 3: result = "summer";
//     console.log(result);
//     break;
//     case 4: result = "autumn";
//     console.log(result);
//     break;
// }

// let day = 0;

// if (day >= 1 && day <= 10) {
//     console.log("1 decade");
// } else if (day > 10 && day <= 20) {
//     console.log("2 decade");
// } else if (day > 20 && day <= 31) {
//     console.log("3decade");
// } else {
//     console.log("error");
// }

// let month = 2;

// if (month >= 1 && month <= 2 || month === 12) {
//     console.log("winter");
// } else if (month >= 3 && month <= 5) {
//     console.log("spring");
// } else if (month >= 6 && month <= 8) {
//     console.log("summer");
// } else if (month >= 9 && month <= 11) {
//     console.log("autumn");
// }

// let str = "abcde";

// str.charAt(0) === "a" ? console.log("yes") : console.log("not");
// str.at(0) === "b" ? console.log("yes") : console.log("not");
// str[0] === "a" ? console.log("yes") : console.log("not");
// str.substring(0, 1) === "a" ? console.log("yes") : console.log("not");
// str.slice(0, 1) === "b" ? console.log("yes") : console.log("not");

// let strNum = "12345";

// strNum.charAt(0) === "1" || strNum.charAt(0) === "2" || strNum.charAt(0) === "3"
//     ? console.log("yes") 
//     : console.log("not");

// let strNumSum = "111";
// let sixNum = "211111";
// let res = 0;

// function sum(strNumSum) {
//     let a = parseInt(strNumSum.charAt(0));
//     let b = parseInt(strNumSum.charAt(1));
//     let c = parseInt(strNumSum.charAt(2));
//     console.log(a + b + c);
// }

// function sumSix(i) {
//     let a = parseInt(i.charAt(0));
//     let b = parseInt(i.charAt(1));
//     let c = parseInt(i.charAt(2));
//     let d = parseInt(i.charAt(3));
//     let e = parseInt(i.charAt(4));
//     let f = parseInt(i.charAt(5));
//     let result1 = a + b + c;
//     let result2 = d + e + f;

//     result1 === result2 ? console.log("yes") : console.log("not");;
// }

// sum(strNumSum)
// sumSix(sixNum)

// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i++
// }

// let z = 1;
// while (z <= 100) {
//     z++;
//     if (z >= 11 && z <= 33) {
//         console.log(z);
//     }
// }

// let n = 1;
// while (n <= 100) {
//     n++;
//     if (n % 2 === 0) {
//         console.log(n);
//     }
// }

// let result = 0;
// while (i != 100) {
//     i++
//     result += i
//     console.log(result);
// }


// for (; i <= 100; i ++) {
//     console.log(i);
// }

// for (; i <= 100; i ++) {
//     if (i >= 11 && i <= 33) {
//         console.log(i);
//     }
// }

// for (; i <= 100; i ++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let result = 0;

// for (i = 0; i <= 100; i ++) {
//     result += i
// }

// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = 0;

// for (let i = 0; i < arr.length; i ++) {
//     console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i ++) {
//     result += arr[i];
// }

// console.log(result);

// let arr2 = [10, 20, 30, 50, 235, 3000];

// for (i = 0; i < arr2.length; i ++) {
//     if (arr2[i] > 3 && arr2[i] < 10) {
//         console.log(arr2[i]);
//     }
// }

// for (i = 0; i < arr2.length; i ++) {
//     if (arr2[i] >= 0) {
//         result += arr2[i]
//     }
// }

// console.log(result);

// for (i = 0; i < arr2.length; i ++) {
//     if (arr2[i] === 4) {
//         console.log("Done");
//     }
// }

// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let resu = "";

// for (i = 0; i < arr3.length; i ++) {
//     arr3[i] *= -1;
//     resu += arr3[i]
// }

// console.log(resu);
 
// let car = 10;
// let days = 0;

// for (i = 0; i < car; i ++) {
//     car /= 2;
//     days += 1;
//     if (car === 0) {
//         console.log(days);
//     }
// }

// console.log(days);

// let n = 1000;
// let num = 0;

// for (i = 0; i < 1000; i ++) {
//     n /= 2;
//     num += 1;
//     if (n < 50) {
//         break
//     }
// }

// console.log(num);

// let n = 0;
// for (i = 1800; i < 2022; i++) {
//     n += 1;
//     if (i === 1961) {
//         console.log(`${n} раз понадобилось чтобы получить ${i} год`);
//     }

    // if (i % 4 === 0) {
    //     console.log(`${i} - високосный год`);
    // }
// }
// console.log(`${n} раз цикл выполнялся`);

// function main(depth) {
//     // var depth = parseInt(readLine(), 10);
    
//     let day = 7;
//     let night = 2;
//     let daysNeed = 0;

//     for (i = 0; i < depth; i ++) {
//         i += day;
//         i -= night;
//         daysNeed += 1
//         if (i >= depth) {
//             break
//         }
//     }
//     return daysNeed
// }

// console.log(main(128));

// let message;
// let login = "useeer";

// message = (login === "manager") ? console.log(message = "hello") :
// (login === "admin") ? console.log(message = "helo") :
// (login === "user") ? console.log(message = "hola") : console.log("hola-ola")

// function greeting(userN = "user") {
//     console.log(` Hello ${userN}`);
// }

// greeting("Pavel")

// function powInt(a, b = 1) {
//     console.log(a ** b);
// }

// powInt(2)

// function summ(a = []) {
//     let result = 0;
//     for (i = 0; i < a.length; i++) {
//         result += a[i]
//     } 
//     console.log(result / a.length);
// }

// summ([1, 2, 3, 4])

// const getName = (name) => `Name - ${name}`;

// console.log(getName("Alice"));

// const str = (newStr, n) => {
//     for (i = 0; i < n; i++) {
//         console.log(newStr)
//     }
// }

// str("alice", 2);
// str("pavel", 4);

// const alphabet = (a) => {

//     let arr2 = "aeiouy";
//     let res;

//     for (i = 0; i < arr2.length; i ++) {
//         if (a === arr2[i]) {
//             res = "true"
//             break
//         } else {
//             res = "false"
//         }
//     }
//     console.log(res);
// }

// alphabet("o")

// const pal = (a) => a.split("").reverse().join("") == a ? console.log("true") : console.log("false");
// pal("шалашовка")



// function summa(callback) {
//     return callback
// }

// function s() {
//     console.log("Hello World!");
// }

// summa(s())

// const two = (a) => console.log( a ** 2);
// two(3)

// const summ = (a, b) => console.log(a + b);
// summ(1, 2)

// const divider = (a, b, c) => console.log((a - b) / c);
// divider(10, 2, 2)

// const dayOfWeek = (a) => {
//     switch (a) {
//         case 1: console.log("Monday");
//         break;
//         case 2: console.log("Tuesday");
//         break;
//         case 3: console.log("Wednesday");
//         break;
//         case 4: console.log("Thursday");
//         break;
//         case 5: console.log("Friday");
//         break;
//         case 6: console.log("Saturday");
//         break;
//         case 7: console.log("Sunday");
//         break;
//         default: console.log("Please enter a number from 1 to 7");
//     }
// }
// dayOfWeek(9)

// const equalsNum = (a, b) => a === b ? console.log(true) : console.log(false);
// equalsNum(1, 4)

// const summNum = (a, b) => (a + b) > 10 ? console.log(true) : console.log(false);
// summNum(1, 20)

// const negativeNum = (a) => a >= 0 ? console.log(true) : console.log(false);
// negativeNum(-10)

//8
const isNumberInRange = (a) => a > 0 && a < 10 ? true : false;
// isNumberInRange(20)

//9
const positiveNum = (a, callback) => {
    let arr = [];
    for (i = 0; i < a.length; i++) {
        if (callback(a[i])) {
            arr.push(a[i]);
        }
    }
    console.log(arr);
}
// positiveNum([1, 20, 3, 44, 12, 9, 4], isNumberInRange)

//10
const getDigitsSum = (a) => {
    let res = String(a);

    let resNum = 0;

    for (i = 0; i < res.length; i++) {
        resNum += Number(res[i])
    }

    return resNum;
}
// console.log(getDigitsSum(121))

//11
const dateYear = (callback) => {
    let arr = [];
    for (let i = 1; i <= 2020; i++) {
        if (callback(i) == 13) {
            arr.push(i)
        }
    }
    return console.log(arr);
}
// dateYear(getDigitsSum)



// 12
const isEven = (a) => a % 2 === 0 ? true : false;
// isEven(3)

//13
const arrIsEven = (a, callback) => {
    let res = [];
    for (i = 0; i < a.length; i ++) {
        if (callback(a[i])) {
            res.push(a[i])
        }
     }  
    console.log(res);
}
// arrIsEven([1, 2, 3, 4, 8, 10, 3], isEven)

//14
const getDivisors = (a) => {
    let arr = [];
    for (i = 0; i < a; i++) {
        if (a % i === 0) {
            arr.push(i)
        }
    }
    console.log(arr);
}
// getDivisors(12)

//15
const summNine = (a, callback) => {
    let b = callback(a);
    while (b > 9) {
        b = callback(b);
    }
    return b;
}
// console.log(summNine(1599, getDigitsSum))

//16
const pal = (a) => a.split("").reverse().join("") === a ? console.log("true") : console.log("false");
// pal("шалаш")


let myFavoriteFilm = {
    nameFilm: "Shantaram",
    year: 2022,
    producer: "Alex Contier",
    country: "USA"
}

myFavoriteFilm.price = 10000200002;

const hello = function() {
   return `Name of film - ${myFavoriteFilm.nameFilm}`
}

delete myFavoriteFilm.year

myFavoriteFilm.hello = hello()
// console.log(myFavoriteFilm)

const upperOrLowerCase = (str, a) => str[a].toUpperCase() === str[a] ? true : false;
// console.log(upperOrLowerCase("ZanoZa", 0))

const replaceIncludes = (str) => {
    return newStr = str.replace(/find/i, "replace");
}
// console.log(replaceIncludes("hello dear. FiNd global world or find yourself"))

const newNumber = (min, max) => {
    return Math.round((Math.random() * (max - min) + min));
}
// console.log(newNumber(1, 10));

const schedule = {
    // name: "Alice"
};

const isEmpty = (obj) => {
    for (let key in obj) {
        if (key in obj) {
            return true;
        } 
    }
    return false;
}
// console.log(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const summa = (obj) => {
    let summ = 0;
    for (let key in obj) {
        summ += obj[key]
    }
    return summ;
}
// console.log(summa(salaries));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
        return obj;
    }
}
// console.log(multiplyNumeric(menu)); 
// console.log(typeof menu);

let nameVasya = "vasya";
nameVasya[0] = "V";

let newvasya = nameVasya[0].toUpperCase() + nameVasya.slice(1);
// console.log(newvasya);

const checkSpam = (str) => {
    let lowerCase = str.toLowerCase();
    return lowerCase.includes("viagra") || lowerCase.includes("xxx") ? true : false;
}
// console.log(checkSpam("buy now"));

const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "..."
    }
    return str;
}
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

const extractCurrencyValue = (str) => {
    return +str.slice(1);
}
// console.log(extractCurrencyValue("$120"));