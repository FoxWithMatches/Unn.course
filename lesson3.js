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

let n = 0;
for (i = 1800; i < 2022; i++) {
    n += 1;
    // if (i === 1961) {
    //     console.log(`${n} раз понадобилось чтобы получить ${i} год`);
    // }

    if (i % 4 === 0) {
        console.log(`${i} - високосный год`);
    }
}
console.log(`${n} раз цикл выполнялся`);