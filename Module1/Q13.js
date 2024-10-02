// Turn the object into JSON and back Turn the user into JSON and then read it back into another variable.
// user = { name: "John Smith", age: 35}
let user = { name: "John Smith", age: 35 };

let userJson = JSON.stringify(user);
console.log("🚀 ~ userJson:", userJson); //{"name":"John Smith","age":35}

let userParsed = JSON.parse(userJson);
console.log("🚀 ~ userParsed:", userParsed); // { name: 'John Smith', age: 35 }  ///====13
