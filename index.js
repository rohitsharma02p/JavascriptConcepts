// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(j);
//     }, i * 1000);
//   }

//   console.log("End of the function");
// }
// // x();

// // let & const in JS 🔥Temporal Dead Zone | | Namaste JavaScript Ep. 8

// // 1. let and const are hoisted but its memory is allocated at other place than window
// // which cannot be accessed before initialisation.
// // 2. Temporal Dead Zone exists until variable is declared and assigned a value.
// // 3. window.variable OR this.variable will not give value of variable defined using let or const.
// // 4. We cannot redeclare the same variable with let/const(even with using var the second time).
// // 5. const variable declaration and initialisation must be done on the same line.
// // 6. There are three types of error:
// // [1] referenceError {given where variable does not have memory allocation}
// // [2] typeError {given when we change type that is not supposed to be changed}
// // [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
// // 7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
// // 8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.

// // BLOCK SCOPE & Shadowing in JS 🔥| Namaste JavaScript 🙏 Ep. 9

// {
//   // compound statement
//   const a = 10;
//   //   console.log(a);
// }
// // Use Block to combine multiple statements to use where js expects single statement

// if (true) {
//   // compound statement
//   const a = 10;
//   //   console.log(a);
// }
// var a = 100;
// let b = 100;
// {
//   var a = 10;
//   //   Here a shadwos the value to 10 because a is pointing to the same memory location
//   //   let b = 20;
//   const c = 30;
//   //   console.log(a);
//   //   console.log(b);
//   //   console.log(c);
// }
// // console.log(a);
// // console.log(b);
// // console.log(c);

var a = 100;
function x() {
  var a = 200;
//   var is a function scoped
  console.log(this.a);
  console.log(a);
}
x();
