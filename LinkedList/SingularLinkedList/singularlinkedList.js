class Node {
    constructor(data,next = null){
        this.data = data,
        this.next = next

    }
}

class SingularLinkedList{
    constructor(head,size){
        this.head = null,
        this.size = 0
    }

    //insert at start
     insertElementAtStart(data){
        //here list is empty 
     this.head = new Node(data,this.head)
     this.size++
     }
    

     //insert at end
     insertElementAtEnd(data){
        //create new node with data to append at last
             let node = new Node(data)
             let current

             if(!this.head){
                this.head = node
             }else{
                current = this.head

                while(current.next){
                    current = current.next
                }

                current.next = node
             }
             this.size++
     }


     //insert at any index 
     insertAtIndex(data,index){
        if(index > 0 && index > this.size){
            console.log("Invalid index!!!", index)
            return
        }
        
        //if index is 0 means make it as head first element
        if(index === 0){
            this.head = new Node(data,this.head)
            return
        }

        let node = new Node(data)
        let current, previous

        // assign head to current
        current = this.head
        let count = 0
        while(count < index){

            //node before index
            previous = current 
            count++

            //node after index
            current = current.next
        }

        node.next = current
        previous.next = node
        
        this.size++

     }


     //read value at index

     getValueAtIndex(index){
        let current = this.head
        let count = 0
        while(current){
            if(count == index) {
                console.log(current.data)
            }
            count++
            current = current.next
           
        }
        return null
     }

     //delete from index

     removeFromIndex(index){
        if(index > 0 && index > this.size){
            console.log("Invalid index!!!", index)
            return
        }
        
        let current = this.head
        let previous
        let count = 0

        if(index ===0){
            this.head = current.next
        }else{
            while(count<index){
                count++
                previous = current
                current=current.next
            }

            previous.next = current.next
        }
       this.size--
     }

     //clearAllList
     clearList(){
        this.head = null
        this.size = 0
     }
     //print only data
     printListData(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }

     }

     
}

const llObj = new SingularLinkedList()
llObj.insertElementAtStart(100)
llObj.insertElementAtStart(200)
llObj.insertElementAtStart(300)
llObj.clearList()
llObj.insertElementAtEnd(400)
llObj.insertAtIndex(500,0)
llObj.insertAtIndex(600,20)
llObj.removeFromIndex(1)

//llObj.getValueAtIndex(2)
 llObj.printListData()

