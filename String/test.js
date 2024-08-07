// var x = 1;
// var output = (function(x) {
//   delete x;
//   return x;
// })(0);  

// console.log(output);

//     var emptyList = function (){
//         var arrayList = ["Mercedes", "Audi", "Maruti", "BMW"];
//             return arrayList.splice(arrayList.length)
                
//     }

// console.log(emptyList())
// var Employee = {
//     company:  'xyz'
//   }
//   var emp1 = Object.create(Employee);
//   delete emp1.company;
//   console.log(emp1.company);

// bar();
// (function abc(){console.log('something')})();
// function bar(){console.log('bar got called')};

// (function() {
// 	var greet = 'Hello World';
// 	var toGreet = [].filter.call(greet, function(element, index) {
// 		return index > 5;
// 	});
// 	console.log(toGreet);
// }());

// var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
// var arrB = arrA.slice();
// arrB[0].prop1=42;
// arrB[3] = 20;
// console.log(arrA);


// var employeeId = 'aq123';

// function Employee() {
// 	this.employeeId = 'bq1uy';
// }
// console.log(new Employee().employeeId);
// Employee.prototype.employeeId = 'kj182';
// Employee.prototype.JobId = '1BJKSJ';
// console.log(new Employee().JobId);
// console.log(new Employee().employeeId);

// var myObject = {
//     x: 3,
//     myFunc: function(y, z,k) {
//         return this.x+ y * z + k;
//     }
// };
// console.log(myObject.myFunc.apply({x:5},  [7,6,7,8]));

// var addSix  = function (n){
//     return createBase(6) + createBase(n)
//     }

//     var createBase = function (n){
//         return n
//     }  

// console.log(addSix(10))
// console.log(addSix(21))

// function mul(x){
//     return function(y){
//         return function(z){
//             return x*y*z
//         }
//     }
// }

// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

// var duplicate = function (array){
   
//   var length = array.length

//     for (i=0;i<length;i++){
//          array.push(array[i])
      
//     }
//     return array
// }
 
    
//    console.log( duplicate([1, 2, 3, 4, 5]))  

// var print = function (){

//     for(i=1;i<=100;i++){
//         if(i%3==0 && i%5==0){
//             console.log("fizzbuzz")
//             continue
//         }
//         if(i%3==0){
//             console.log("fizz")
//             continue
//         }

//         if(i%5==0){
//             console.log("buzz")
//             continue
//         }    
// } 

//  }



// print()


// var print = function (string){
// if(string.includes("Dassault")) { return string }
// return "Dassault" +" " + string
// }
//   console.log(print("systemes"))
//   console.log(print("Dassault systemes"))



// var deepClone =function(obj){
// return {...obj}
// }

// var obj ={
//     "abc":1
// }
// var newObject = deepClone(obj);
// newObject.abc = 2
// console.log("newObject==>",newObject)
// console.log("obj==>",obj)
// console.log(obj === newObject) // returns true
console.log('5' == 5)
console.log('5' == 6)
console.log('5' === 5)
console.log(typeof NaN)
console.log(typeof parseInt("12"))
console.log(typeof +"12")
console.log('a' + 3)
console.log('a' - 3)
console.log('5' + 3)
console.log('5' - 3)
console.log(NaN === NaN)
console.log(1 < 2 <3)
console.log(1 > 2 >3)
console.log(3 > 2 >1)