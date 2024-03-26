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

class DoubleLinkedList extends LinkedList{
    tail = null;

    createNode(element){
        return {element,next:null,prev:null}
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
            //change1
            node.prev = current
        }

        //change2
        this.tail=node
        this.size += 1;
        return this.size;
    }

    insert(element,index =0){
        //change1
        if( index>this.size) return false

        const node = this.createNode(element)
 
        if(index === 0){
            //chang2
            if(this.head){
                node.next = this.head
                this.head.prev = node
            }else{
                this.tail = node
            }
         this.head = node
        } else if(index === this.size){
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        } 
        else{
         let current = this.getNodeAt(index) 
         let prev = current.prev
         //this.head;
         // for(let i=0;i<index-1;i++){
         //     previous = previous.next
         // }
             prev.next = node
             current.prev = node
             node.prev=prev
             node.next = current
        }
 
        this.size += 1;
        return true
    }

    remove(index){
        if(index === undefined || index < 0 || index >=this.size) return null
        let removeNode = this.head
        if(index === 0) {
            this.head = this.removeNode.next
            if(this.size === 1){
                this.tail = null
            }else{
                this.head.prev = null
            }
        } if(index === this.size -1){
            removeNode = this.tail
            this.tail = removeNode.prev
            this.tail.next = null

        } 
       else{
            removeNode = this.getNodeAt(index)
            const previous = removeNode.prev
            const next = removeNode.next

            previous.next = next
            next.prev = previous
        }

        this.size -=1
        return removeNode.element
    }


    reverse(){
        let current = this.head
        this.head = this.tail
        this.tail = current

        for(let i = 0;i<this.size ;i++){
            const {prev,next} = current

            current.prev = next
            current.next = prev
            current=next
        }
    }
}

class CircularLinkedList extends LinkedList{
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

        //Change append last node to head first node in circular linkedlist
        node.next = this.head

        this.size += 1;
        return this.size;
    }


    insert(element,index=0){
        if(index<0 || index>this.size) return false

       const node = this.createNode(element)

       if(index === 0){
        node.next = this.head

        //change is if list empty assign node.next to itself
        if(this.isEmpty){
            node.next = node
        }else{ 
            //add last node next to new node
            const last = this.getNodeAt(this.size -1)
            last.next = node
        }
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


    remove(index = 0){
        if(index === undefined || index < 0 || index >=this.size) return null
        let removeNode = this.head
        if(index === 0) {
        if(this.size === 1){
            this.head = null
        }else{
            //make last point to head
            const last = this.getNodeAt(this.size -1)
            this.head = this.head.next
            last.next = this.head
        }
        } else{
            let previous = this.getNodeAt(index - 1)
            removeNode = previous.next
            previous.next = removeNode.next
        }

        this.size -=1
        return removeNode.element
    }
}

console.log("####### SINGULAR LINKEDLIST OUTPUT #########")
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
console.log("####### DOUBLY LINKEDLIST OUTPUT #########")
const list1 = new DoubleLinkedList()
list1.push(10)
list1.push(20)
list1.insert(0)
list1.insert(100,3)
list1.print()
list1.remove(2)
console.log(list1.toString())
list1.reverse()
console.log(list1.toString())
console.log("####### CIRCULAR LINKEDLIST OUTPUT #########")
const list2 = new CircularLinkedList()
list2.push(10)
list2.push(20)
list2.push(30)
list2.push(0)
list2.push(100,list2.size)
list2.remove(0)
list2.remove(list2.size - 1)
console.log(list2.toString())
list2.print()
