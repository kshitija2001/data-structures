var fibGenerator = function*() {
    var current = a = b = 1;
   yield 0
   yield 1;
     //array.push(1);
   // yield array
  
    while (true) {
      current = b;
  
     yield current;
      // array.push(current)
    
  
      b = a + b;
      a = current;
     // yield array
    }
    
};

var gen = fibGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
// console.log(gen.next().value)