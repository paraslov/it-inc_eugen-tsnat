console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// let prom  = new Promise((res, rej) => {
//     let a = 10;
//     console.log(a);
//     // some async request
//     rej({name: 'Eugene'});
//     res(10);
// });
// console.log(prom)

// let prom  = new Promise((res, rej) => {
//     // some async request
//     res({a: 10 });
//     //rej('Error');
// });
// then, catch, finally

// prom
//     .then(res => {
//             console.log('then ', res);
//             return 50;
//         }, err => {
//             console.log('err ', err);
//             //throw '000';
//             return 'URL';
//     })
//
//     .then(res2 => {
//         console.log('then 2 ', res2);
//     }, err2 => {
//         console.log('err2 ', err2)
//     })
//
//     .then(res3 => {}, err3 => {})

// prom
//     .then(res => {
//         console.log('then ', res);
//         return 50;
//     })
//
//     .then(res2 => {
//         console.log('then 2 ', res2);
//     })
//
//     .then(res3 => {}, err3 => {
//         console.log('err3 ', err3)
//     })


// prom
//     .then(res => {
//         console.log('then ', res);
//         return 50;
//     })
//
//     .then(res => {
//         console.log('then ', res);
//         //throw 1000;
//         return 500;
//     })
//     //@ts-ignore
//     .finally( res => {
//         console.log('finally ', res);
//     })
//
//     .then(res => {
//         console.log('then ', res);
//         return 700;
//     })
//
//     .catch(err => {
//         console.log('err ', err);
//     })

// let a = 10;
//
// async function f() {
//     a = 50;
//     let result = await // some async request
//     a = 100;
// }
//
// f();

//console.log(a)

async function f() {
    throw 50
}

//f().catch(console.log);

f().catch(console.log)



// just a plug
export default ()=>{};