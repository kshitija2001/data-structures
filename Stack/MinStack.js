class Stack{
    constructor(){
        this.stack = []
    }


    push(element){
        console.log("inside push",element)
     this.stack.push(element)
     return this.stack
    }

    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.stack.length === 0
    }

    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.size() -1]
    }
    minStack(){
        let min = this.stack[0]
        for(let i=0;i<this.size();i++){
           min = Math.min(min,this.stack[i])
           }

           return min
    }
    printStack(){
        console.log("this.size()=>",this.size())
       for(let i=0;i<this.size();i++){
        console.log("i==>",i)
        console.log("element is ",this.stack[i])
       }
    }
}

const stack = new Stack()
console.log(stack.push(10))
console.log(stack.push(0))
console.log(stack.push(170))
console.log("min value==>",stack.minStack())
console.log(stack.isEmpty())
console.log(stack.printStack())
console.log("####")
console.log(stack.size())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.size())