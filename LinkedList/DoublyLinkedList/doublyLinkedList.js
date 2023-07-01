class Node{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null

    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next:null,
            prev: null
        }

        this.length = 1;
        this.tail = this.head
    }



    //printList
    printList(){
        let array =[];
        let currentList = this.head
        // if(array.length == 0){
        //     console.log("List is empty , please add elements!!")
        //     return this;
        // }
       // console.log("currenList==>",currentList)
        while(currentList !==null){
            array.push(currentList.value)
            currentList = currentList.next

        }
       
        console.log("List is=> ",array.join())
       
        return this;
    }


    append(element){
        let newNode = new Node(element)

      //  append first node
        // if(!this.head.next){
        //     this.head = newNode
        //     this.tail = newNode
        //     this.length++
        // }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode

        this.length++
       // this.printList();
    }


    prepend(element){
        let newNode = new Node(element)

          //  append first node
        //   if(!this.head.next){
        //     this.head = newNode
        //     this.tail = newNode
        //     this.length++
        // }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++
    //   /  this.printList();
    }


    insertAtIndex(index,element){
        console.log("length before insertion is==>",this.length)
   
        if(index < 0 || index > this.length){
            console.log("invalid index==> length is==>",this.length)
            return this;
        }

        // can prepend element 
        if(index === 0){
            this.prepend(element)
            return this;
        }

// can append element
        if(index === this.length){
            this.append(element)
            return this;
        }

      /*  let newNode = new Node(element)
        //when index is in between reach till that index
        let previousNode = this.head

        for (let k = 0;k < this.length - 1; k++){
            previousNode = previousNode.next;
        }

        let nextNode = previousNode.next

        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previousNode = previousNode;
        nextNode.previousNode = newNode;
      

        this.length++;  */

           // Reach the node at that index
           let newNode = new Node(element);
           let previousNode = this.head;
   
           for (let k = 0; k < index - 1; k++) {
               previousNode = previousNode.next;
           }
   
           let nextNode = previousNode.next;
           
           newNode.next = nextNode;
           previousNode.next = newNode;
           newNode.prev = previousNode;
           nextNode.prev = newNode;
   
           this.length++; 
        //   this.printList();
    }


    removeAtIndex(index){
        console.log("length before removal is==>",this.length)
        if(index < 0 || index > this.length){
            console.log("invalid index==> length is==>",this.length)
            return this;
        }
//remove head
        if(index==0){
            this.head = this.head.next
            this.head.prev = null

            this.length--
            return this
        }

//rmeove tail
        if(index == this.length -1){
            this.tail= this.tail.prev
            this.tail.next = null

            this.length --
            return this
        }


        //remove at index
       /* let previousNode = this.head
        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }

        let deleteNode = previousNode.next
        let nextNode = deleteNode.next
        previousNode.next = nextNode
        nextNode.prev = previousNode
        this.length--

        return this;*/


        let previousNode = this.head;

        for (let k = 0; k < index - 1; k++) {
            previousNode = previousNode.next;
        }
        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
       // this.printList();
        return this;
    }
}

const myList = new DoublyLinkedList(10)
myList.append(5); 
myList.append(16)
myList.prepend(1)
myList.insertAtIndex(2,99) // prepend
myList.insertAtIndex(20,88) //append
myList.insertAtIndex(5,80)
myList.insertAtIndex(0,80)
myList.removeAtIndex(0) // remove head
myList.removeAtIndex(5)
myList.removeAtIndex(2)
myList.printList()