 const user = {
    name: "Alice",
 };

 const russian = {
    country: "Russia",
    city: "NN",
    __proto__: null,
 };

 const people = {
    name: "Alice",
    age: 30,
    __proto__: russian,
 };
//  console.log(people);

const userName = "Alice";
const userNew = {
    userName,
};
const { userName: myUser } = userNew //destruction

function CreateUser(userName, userAge) {
    this.name = userName;
    this.age = userAge;
    this.sayHi = function() {
        console.log(`My name is ${this.name}`);
    };
};
CreateUser.prototype.sayAge = function() {
    console.log(`i'm ${this.age}`);
}

const firstUser = new CreateUser("Alice", 30)
const secondUser = new CreateUser("Pablo", 34)
// console.log(firstUser);
// secondUser.sayHi()
// secondUser.sayAge()

function CreateCard(from, to) {
    this.from = from;
    this.to = to;
    this.show = function() {
        console.log(`Эта открытка отправлена из ${this.from} в ${this.to}.`);
    };
}

CreateCard.prototype.changeFrom = function(from){
    this.from = from
}

const firstCard = new CreateCard("NN", "Arzamas")
const secondCard = new CreateCard("Sarov", "Lukoyanov")
// firstCard.show()
// console.log(firstCard);
// console.log(secondCard);
// firstCard.changeFrom("Moscow")
// firstCard.show()

class People {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Worker extends People {
    constructor(name, surname, rate, day) {
        super(name, surname);
        this.rate = rate;
        this.day = day;
    };
    getSalary() {
        return `${this.rate * this.day}`;
    };
}

const firstPeople = new People("Alice", "Tsyganova")
const firstWorker = new Worker("Pavel", "Tsyganov", 10, 10)
const secondWorker = new Worker("Alice", "Tsyganova", 100, 5)
// console.log(firstWorker.getSalary());
// console.log(firstWorker.getFullName());
// console.log(secondWorker.getSalary());
// console.log(secondWorker.getFullName());
// console.log(firstPeople);
// console.log(firstPeople.getFullName())



