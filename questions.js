// const afn = async () => {
//     return await new Promise((res) => {
//         res('res1')
//     })
// };

// const afn = async (res, rej) => {
//     return await new Promise((res) => {
//         rej('res1')
//     })
// };

// const afn = async () => {
//     await new Promise((res) => {
//         res('res1')
//     })
//
//     await new Promise((res) => {
//         res(promise1res + 'res2')
//     })
//     return promise2res
// };

// setTimeout(() => new Promise((res) => res(
//     console.log("promise inside setTimeOut")
// )), 0)
//
// new Promise((res) => res(setTimeout(() => console.log("setTimeOut insidepromise "), 0)))

// new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             resolve(xhr.response);
//         } else {
//             reject({
//                 status: xhr.status,
//                 statusText: xhr.statusText
//             });
//         }
//     };
//     xhr.onerror = function () {
//         reject({
//             status: xhr.status,
//             statusText: xhr.statusText
//         });
//     };
//     xhr.send();
// });

// let xhr = new XMLHttpRequest()
//
// function *statechange() {
//     yield xhr.readyState;
// }
//
// let gen = statechange();
//
// xhr.open("GET", myUrl, true);
// xhr.onreadystatechange = function() {console.log(gen.next())};
// xhr.send();
