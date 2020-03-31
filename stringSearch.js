// const StringSearch = (lString, sString) => {
//     let count = 0
//     for(let i = 0; i < lString.length; i++) {
//         if(lString[i] === sString[0]){
//             for(let j = 1; j < sString.length; j++) {
//                 if(lString[i + j] !== sString[j]) break;
//                 j === sString.length - 1 && count++;
//             }
//         }
//     }
//     return count;
// };

// console.log(StringSearch('let me try it try', 'try'));

const os = require('os');
const path = require('path');
const string = __filename;
const url = require('url');

// console.log(os.type());
// console.log(os.totalmem());
// console.log('path.sep:', path.sep); 
// console.log('path.delimiter:', path.delimiter); 
// console.log('path.dirname():', path.dirname(string));
const URL = url.URL;
const myURL = new URL('https://col.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11071946#overview');

console.log('new URL():', myURL);