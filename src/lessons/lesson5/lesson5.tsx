console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
//
// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o
//
// https://www.youtube.com/watch?v=xY-mwUzDjsk
//
// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new
//
// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
    greetings: () => string
}

let someObj:someObjType = {
    name: 'Eugene',
    age: 32,
    greetings: function () {
        return `My name is ${this.name}. I am ${this.age}`
    }
}

console.log(someObj.greetings())

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

const counter = {
    _count: 0,
    getCurrentCount() {
        return this._count
    },
    setCurrentCount(value: number) {
        this._count = value
        return counter
    },
    restCurrentCount() {
        this._count = 0
    },
    increment() {
        this._count += 1
        return counter
    },
    decrement() {
        this._count -= 1
        return counter
    }
}

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
type MyThisType = {
    myName: string
    age: number
    greetings: () => string
}
function MyFirstConstructorFunc(this: MyThisType, name: string, age: number) {
    this.myName = name
    this.age = age
    this.greetings = function () {
        return `My name is ${this.myName}. I am ${this.age}`
    }
}

let dimych: MyThisType

// @ts-ignore
dimych = new MyFirstConstructorFunc('Dymych', 36);

console.log(dimych.greetings())

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {name: 'Two', sayHello() {console.log(`Hello, my name is ${this.name}`)}};

Two.sayHello.bind(One)()

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

const helperObj = {
    name: 'default name',
    age: 18,
    changeName(newName: string) {
        this.name = newName
    },
    setAge(age: number) {
        this.age = age
    },
    greeting: Two.sayHello
}
helperObj.changeName('Sergio')
helperObj.setAge(36)
helperObj.greeting()

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a:number,b:number):number {return a + b}

function bindNumber(func: Function, num: number) {
    return func.bind(null, num)
}

const bindTen = bindNumber(sumTwoNumbers, 10)

console.log(bindTen(20))

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One

function oneHelperObjMix(oneObj: any, helperObj: any) {
    return function (newName: string) {
        helperObj.changeName.bind(oneObj, newName)()
    }
}
const changeOneName = oneHelperObjMix(One, helperObj)
changeOneName('New One Cool Name!!!')
console.log(One.name)

// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 33
helperObj.setAge.apply(Two, [33])
// @ts-ignore
console.log(Two.age)
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
// @ts-ignore
One.hi = helperObj.greeting.bind(Two)
// @ts-ignore
One.hi()

// Реализовать задачи 2-4 из Bind с помощью Call



// just a plug
export default () => {return <div>lesson5</div>};