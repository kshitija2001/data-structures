
var MinStack = function() {
     this.stack = []
};

MinStack.prototype.push = function(val) {
     this.stack.push(val)
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length === 0){
        return "stack is empty"
    }
    return this.stack.pop()
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length === 0){
        return "stack is empty"
    }
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[0]
    for(let i=0;i<this.stack.length;i++){
       min = Math.min(min,this.stack[i])
       }

       return min
};

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)

console.log(obj.getMin())
obj.pop()
console.log(obj.top())
console.log(obj.getMin())

