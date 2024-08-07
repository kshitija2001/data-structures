class LinkedList {
    size = 0;
    head = null;

    get isEmpty(){
        return this.size === 0;
    }


    createNode(element){
        return {element, next:null};
    }


    push(element){
        const node = this.createNode(element)

        if(this.head === null){
            this.head = node
        }else{
            let current = this.getNodeAt(this.size - 1) //this.head
            // while(current.next !== null){
            //     current = current.next
            // }
            current.next = node;
        }

        this.size += 1;
        return this.size;
    }

    toString(){
        if(this.size===0) return '';

        let str = `${this.head.element}`;
        let current = this.head;

        for(let i=0;i<this.size-1;i++){
            current = current.next
            str += `,${current.element}` 
        }

        return str;
    }

    print(){
        let arr =[]
        if(this.size){
            let current = this.head;
            for(let i=0;i<this.size;i++){
                arr.push(current);
                current=current.next
            }
        }
        console.log("Printed list is==>",arr)
    }

    insert(element,index=0){
        if(index<0 || index>this.size) return false

       const node = this.createNode(element)

       if(index === 0){
        node.next = this.head
        this.head = node
       } else{
        let previous = this.getNodeAt(this.size - 1) //this.head;
        // for(let i=0;i<index-1;i++){
        //     previous = previous.next
        // }
            node.next = previous.next
            previous.next = node
       }

       this.size += 1;
       return true
    }

    getNodeAt(index){
        if(index === undefined || index < 0 || index >=this.size) return null

        if(index ===0) return this.head

        let current = this.head

        for(let i=0;i<index;i++){
            current = current.next
        }

        return current  
    }
    /*get(index){
        if(index === undefined || index < 0 || index >=this.size) return null

        if(index ===0) return this.head.element

        let current = this.head

        for(let i=0;i<index;i++){
            current = current.next
        }

        return current.element
    }*/
    get(index){
        const node = this.getNodeAt(index)
      
        return node ? node.element : "element not found"
    }


    remove(index = 0){
        if(index === undefined || index < 0 || index >=this.size) return null
        let removeNode = this.head
        if(index === 0) {
            this.head = this.head.next
        } else{
            let previous = this.getNodeAt(index - 1)
            removeNode = previous.next
            previous.next = removeNode.next
        }

        this.size -=1
        return removeNode.element
    }


    indexOf(element){
       let current = this.head
      if(current.element === element) return 0

      for (let i=0;i<this.size ;i++){
        if(current.element === element) return i
        current = current.next
      }

      return -1
    }

    contains(element){
        return this.indexOf(element) !== -1
    }
}


const list = new LinkedList()
list.push(0)
list.push(10)
list.insert(100)
list.insert(200,3)
list.insert(500,5)
list.remove(0)
console.log(list.toString())
list.print()
console.log(list.get(4))
console.log(list.get(2))
console.log(list.indexOf(10))
console.log(list.contains(10))
