// console.log(this);

function example() {
    console.log(this, "this");
}
// example()

const testObject = {
    testMethod: example,
};

// testObject.testMethod()

const exampleObj = {
    exampleMethod: example,
    exampleValue: "dsds",
};
// exampleObj.exampleMethod()

const person = {
    name: "Alice",
    age: 30,
    getName: function() {
        console.log(this);
    }
}
// person.getName()

const city = {
    name: "Arzamas",
    population: "500000",
    getName: function() {
        return this.name;
    },
    getPopulation: function() {
        return this.population;
    },
    getNew: function() {
        this.name = "Pavel"
        return this.name;
    },
    setAnyValue: function(key, value) {
        this[key] = value;
    },
}
// console.log(city.getName())
// console.log(city.getPopulation())
// console.log(city.getNew())
// city.setAnyValue("population", "200")
// console.log(city);

const city2 = {
    name: "Niznyi Novgorod",
    population: "1500000"
}

const newCity = city.setAnyValue.bind(city2, "name")

// console.log(city.getName.call(city2))
// console.log(city.getPopulation.apply(city2))
// newCity("Lukoyanov")
// console.log(city2);


const user1 = {
    name: "Vasya",
    surname: "Ivanov"
}

const user2 = {
    name: "Ivan",
    surname: "Vasiliev"
}

function greeting(phrase, smile) {
    console.log(`${this.name} ${this.surname} : ${phrase} ${smile}`);
}

// greeting.call(user1, "hello", "))")
// greeting.apply(user2, ["heelo", "))"])

const greetingUser1 = greeting.bind(user1, "hola")
const greetingUser2 = greeting.bind(user2, "hello")
//частичное применение функции

// greetingUser2("))")
// greetingUser1("hello", "))")

//HOmework------------------------------------------

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
   
// let user = {
//     name: 'Вася',
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
// };
   
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//5------------------
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
   
// let user = {
//     name: 'John',
   
//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };
   
// askPassword(user.login.bind(user, true), user.login.bind(user, false))

//6
const elem = {value: "Привет"}

function func(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

let funct = func.bind(elem)

// funct('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// funct('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

//7
function sum(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            }
        }
    }

// console.log(sum(1)(2)(3));

//V paralepp carry
function volume1(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
}
// console.log(volume1(10)(20)(30));

//closure
function volumeClosure() {
    let height = 10;
    return function(b) {
        return function(c) {
            return height * b * c
        }
    }
}
const volumeC = volumeClosure()
// console.log(volumeC(20)(30));

//8
const timerFunc = () => {
    return (b, c) => {
         setTimeout(() => console.log(`Таймер был запущен с ${c} до ${b}. Работа таймера завершена`), 1000)
    }
}
const newTimer = timerFunc()
// const secondTimer = timerFunc(5)
console.log(newTimer(5, 10));
// console.log(newTimer(1, 100));
// console.log(secondTimer(5, 25));


