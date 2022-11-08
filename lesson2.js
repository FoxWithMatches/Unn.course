// console.log(nameMy);
// console.log(5 > 4);
// console.log("ананас" > "яблоко");
// console.log("13" > "12");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == "\n0\n");
// console.log(null === +"\n0\n");
// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log(" -9 " + 5);
// console.log(" -9 " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(" \t\n" - 2);

// const town = ["paris", "london", "nn"]
// town[0] = "milan"
// town.push("saransk");
// town.push("orel");
// console.log(town);
// // town.pop();
// town.shift("msk");
// console.log(town);

// const films = ["Omen", "13 friends", "COde", "kino"];
// console.log(films[0]);
// films.push("new");
// films.unshift("one");
// console.log(films[films.length - 1]);
// console.log(films)

// console.log("кот" > "код");
// console.log("2" + 2 * "2");
// console.log(undefined == null);
// console.log(undefined != null);
// console.log(null == 0);
// console.log(2 > "3");
// console.log(null - false + true);
// console.log(1 / "l");
// console.log("2" * "3");
// console.log(4 + 5 + "o");
// console.log("i" + 4 + 5);
// console.log("4" - 2);
// console.log(4 - "4x");
// console.log("23" == 23);
// console.log(null == false);
// console.log("-4" / 0 + 1);
// console.log(null + 1);
// console.log(null + undefined);
// console.log(undefined + null);
// console.log(1 === "1");
// console.log("2" > 10);
// console.log(NaN == undefined);

function fixTheMeerkat(arr) {
  let a = arr[2];
  let b = arr[1];
  let c = arr[0];
  let abc = [a, b, c];

  return abc;
}

// console.log(fixTheMeerkat(["tail", "body", "head"]));
function getDivisorsCnt(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.length;
}
// console.log(getDivisorsCnt(10));

function shorter_reverse_longer(a, b) {
  if (a.length > b.length) {
    return b + a.split("").reverse().join("") + b;
  } else if (b.length > a.length) {
    return a + b.split("").reverse().join("") + a;
  } else {
    return b + a.split("").reverse().join("") + b;
  }
}
// console.log(shorter_reverse_longer("first", "abcde"));

function makeUpperCase(str) {
  return str.toUpperCase();
}

function sumMix(x) {
  return Number(x.reduce((prev, cur) => Number(prev) + Number(cur)));
}
// console.log(sumMix(['3']));

function solution(str, ending) {
  return str.endsWith(ending) ? true : false;
}
// console.log(solution('abcde', 'cde'));

const sequenceSum = (begin, end, step) => {
  let res = 0;
  for (let i = begin; i <= end; i += step) {
    res += i;
  }
  return res;
};
// console.log(sequenceSum(1, 5, 1));

//mexican wave
function wave(str) {
  let arr = [];
  let item = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 0) {
      item = str[i].toUpperCase() + str.slice(i + 1);
      arr.push(item);
    } else if (str[i] === " ") {
      continue;
    } else {
      item = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      arr.push(item);
    }
  }
  return arr;
}
// console.log(wave("two words"));

function move(position, roll) {
  return position + roll + roll;
}
// console.log(move(3, 6));

const array = ["1", "2", "3", "4"];
const res = array
  .map((el) => parseInt(el))
  .filter((el) => el % 2)
  .reduce((prev, cur) => Math.max(prev, cur), 0);

// console.log(res);

function invert(array) {
  return array.map((el) => (el *= -1))
}
// console.log(invert([ -1, -2, -3, -4, -5 ]));

// complete the function
function solution(string) {
   let newStr = string.split("")
   for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newStr[i].toUpperCase()) {
      newStr[i] = " " + newStr[i]
    }
   }
   return newStr.join("")
}
// console.log(solution("camel"));

function minMax(arr){

  let item = Math.min(...arr);
  let item2 = Math.max(...arr);
  let newArr = [item, item2]
  return newArr
}
// console.log(minMax([2334454, 5]));

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  const middleBalls = classPoints.reduce((prev, cur) => {
    return prev + cur
  }, 0);
  if ((middleBalls / classPoints.length)  > yourPoints) {
    return false
  } else {
    return true
  }
  
}
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));

function sayHello(name) {
  return ` Hello, ${name}`
}
// console.log(sayHello('Captain Kirk'));

function testEven(n) {
if (n%2 === 0) {
  return true;
} else if (n === parseFloat(n)) {
  return false;
} else {
  return false;
}
}
// console.log(testEven(-12));

function reverseList(list) {
  return list.reverse()
}
// console.log(reverseList([1, 2, 3, 4]));

const rps = (p1, p2) => {
  if (p1 === "scissors" && p2 === "paper" 
    || p1 === "paper" && p2 === "rock" 
    || p1 === "rock" && p2 === "scissors") {
    return "Player 1 won"
  } else if (p2 === "scissors" && p1 === "paper" 
    || p2 === "paper" && p1 === "rock"
    || p2 === "rock" && p1 === "scissors") {
    return "Player 2 won"
  } else {
    return "Draw"
  }
};

function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } else if (n <= 12) {
    return n - 1;
  } else {
    return n - 2;
  }
}

var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}

function fakeBin(x){
  let num = x.split("")
  for (let i = 0; i < x.length; i++) {

    if (num[i] < 5) {
      num[i] = 0;
    } else {
      num[i] = 1;
    }
  }
  return num.join("");
}
// console.log(fakeBin('45385593107843568'));