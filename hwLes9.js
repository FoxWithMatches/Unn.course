//1
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    };
    getSalary() {
        return `${this.rate * this.days}`
    };
    getFullName() {
        return `${this.name} ${this.surname}`
    };
    // get days() {
    //     return this._days
    // };
    // set days(value) {
    //     this._days = value;
    // }
    // get rate() {
    //     return this._rate
    // };
    // set rate(value) {
    //     return this._rate = value
    // }
}

// const firstWorker = new Worker("MAx", "Smit", 10, 10)
// console.log(firstWorker.getSalary());

//2
class Boss extends Worker {
    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days);
        this.workers = workers;
    };
    getSalary() {
        return `${this.rate * this.days * this.workers}`
    }
}

//4
class MyString {
    reverse(str) {
        return str.split("").reverse().join("")
    };
    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1)
    };
    ucWords(str) {
        const newStr = str.split(" ");
        const strFinish = [];
        for (let i = 0; i < newStr.length; i ++) {
            strFinish.push(newStr[i][0].toUpperCase() + newStr[i].slice(1))
        }
       return strFinish.join(" ")
    }
}
const firstStr = new MyString()
// console.log(firstStr.reverse("alisa"));
// console.log(firstStr.ucFirst("alisa"));
// console.log(firstStr.ucWords("hello world my name is alisa"));

//5
class Validator {
    isEmail(email) {
        const re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        let valid = re.test(email);
        if (!valid) {
            return false
        }
        return true;
    };
    isDomain() {

    };
    isDate(dateStr) {
        const re = /^\d{1,2}[\/\. ]\d{1,2}[\/\. ]\d{4}$/;
        let valid = re.test(dateStr);
        if (!valid) {
            return false
        }
        return true;
    };
    isPhone(phone) {
        const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        let valid = re.test(phone);
        if (!valid) {
            return false
        }
        return true
    }
}
const userValidator = new Validator()
// console.log(userValidator.isEmail("freiheiit92@mail.ru"));
// console.log(userValidator.isPhone("+79101446015"));
// console.log(userValidator.isDate("24.11.2022"));

//6
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return `${this.name} ${this.surname}`
    }
}
class Student extends User {
    constructor(name, surname, year) {
        super(name, surname)
        this.year = year
    }
    getCourse() {
        const currentYear = new Date().getFullYear()
        return `${currentYear - this.year + 1}`
    }
}
const firstStudent = new Student("Alice", "Tsyganova", 2021)
console.log(firstStudent.getFullName());
console.log(firstStudent.getCourse());




