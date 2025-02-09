// function CreateObj(nameObj, dateObj){
//     this.name = nameObj;
//     this.date = dateObj;
// }

// const obj = new CreateObj ("Объект ф-ия конструктор", '09-02-2025');
// console.log(obj)


// // классы

// class Student {
//     // ф-ия констурктор
//     constructor(nameStudent, ageStudent, facultyStudent, gradeStudent) {
//         this.name = nameStudent;
//         this.age = ageStudent;
//         this.faculty = facultyStudent;
//         this.grade = gradeStudent;
//     }

//     getInfo() {
//         console.log(`Привет, я ${this.name}, студент ${this.faculty}`)
//     }

//     changeGrade() {
//         this.grade++;
//         console.log(`Оценка ${this.grade}`)
//     }
// }

// const st1 = new Student("Мария", 21, "инфорамационная безопасность", 4.8)
// console.log(st1)

// const st2 = new Student("Роман", 19, "Программист", 3.4)
// console.log(st2)

// st1.getInfo()
// st2.getInfo()

// st2.changeGrade()


// class ElectronicDevice {
//     constructor(name, power, brand) {
//         this.name = name; // название
//         this.power = power; // мощнсоть
//         this.brand = brand; // бренд
//         this.isOn = false // вкл/выкл
//     }

//     // метод для вкл усторойства
//     turOn() {
//         if (!this.isOn) {            // = false
//             this.isOn = true;
//             console.log(`${this.name} включен`)
//         }
//         else {
//             consoile.log(`${this.name} уже включено`)
//         }
//     }


//     // Метод выкл
//     turOff() {
//         if (this.isOn) {
//             this.isOn = false;
//             console.log(`${this.name} выкдючено`)
//         }
//         else {
//             console.log(`${this.name} уже выключено`)
//         }
//     }

//     displayInfoData() {
//         console.log(`Усторойство ${this.name}, бренд ${this.brand}`)
//     }

// }

// class Phone extends ElectronicDevice {
//     constructor(name, power, brand, os, screenSite, battary) {
//         super(name, brand, power);
//         this.screenSite = screenSite;
//         this.battary = battary;
//         this.os = os;
//     }
//     changeBattary() {
//         if (this.battary < 100) {
//             console.log('Зарядка телефона');
//             this.battary = 100;
//             console.log('Телефон полностью заряжен')
//         }
//         else if (this.battary < 0) {
//             console.log("Заряд телефона не может быть меньше 0");
//         }
//         else {
//             console.log("Телефон уже заряжен")
//         }
//     }

//     displayInfoData() {
//         console.log(`Усторойство ${this.name}, ОС: ${this.os}, екран: ${this.screenSite}, батарея: ${this.battary}`)
//     }

// }


// //  obj 2
// const myTV = new ElectronicDevice("Телевизор", 100, "LG");
// console.log(myTV)

// myTV.turOff()

// myTV.displayInfoData()


// // obj 3

// const phoneAngroid = new Phone('Телефон', 'Sumsung', 5, 'Android', 6.9, 40);
// console.log(phoneAngroid)


// // Заадание 1

// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     checkYear() {
//         if (this.year > 0) {
//             console.log("Год введен верно")
//         }
//         else {
//             console.log("такой даты нет")
//         }
//     }

//     getDescription() {
//         console.log(`Название: ${title}, Автор: ${author}, Год: ${year}`)
//     }
// }

// const b1 = new Book("Мертвые души", "Гооголь", 1835);
// console.log(b1)

// const b2 = new Book("Капитанская дочка", "Пушкин", -1836);
// console.log(b2)

// b2.checkYear()



// Задание 2 

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade)
    }

    getAverageGrade() {

        if (this.grades.length == 0) {
            return 'Нет оценок';
        }
        let sum = 0;
        let gradesLen = this.grades.length

        for (let g of this.grades) {
            sum += g;
        }

        return `Средняя оценка ${sum / gradesLen}`
    }

    showInfo() {
        console.log(`Меня зовут ${this.name}, мне ${this.age}, у меня ${this.grades} `)
    }
}

class 


const s1 = new Student("Анна", 21)
s1.addGrade(5)
s1.addGrade(3)
s1.addGrade(3)
s1.addGrade(5)
s1.addGrade(5)

console.log(s1)

console.log(s1.getAverageGrade())