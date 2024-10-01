
//   Import
// You can import modules into a file in two ways, based on if they are named exports or default exports.
// Named exports must be destructured using curly braces. Default exports do not.

// Import named exports from the file person.js:
// default 키워드를 안썼을 때
import { name, age } from "./person.js";

// Import a default export from the file message.js:
console.log(name)
console.log(age)

// default 키워드를 썼을때 내보내기
import message from "./person.js";
console.log(message())

// ● 자바스크립트에서는 하나의 파일이 == 모듈