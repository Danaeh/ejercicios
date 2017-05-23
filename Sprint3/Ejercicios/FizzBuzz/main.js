// var max=100;
//
//
//
// for (var i = 1; i <= max; i++) {
//   var multipleThree = i % 3 === 0;
//   var multipleFive = i % 5 === 0;
//   if (multipleThree) {
//     console.log("Fizz");
//   } else if (multipleFive) {
//     console.log("Buzz");
//   }
//    else {
//     console.log(i);
//   }
//
// }


var max=100;



for (var i = 1; i <= max; i++) {
  var multipleThree = i % 3 === 0;
  var multipleFive = i % 5 === 0;

  if (multipleThree && multipleFive) {
    console.log("FizzBuzz");
  }
  else if (multipleThree) {
    console.log("Fizz");
  }
  else if (multipleFive) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }

}
