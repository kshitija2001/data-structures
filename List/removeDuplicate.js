var deleteDuplicates = function(head) {
//     let current = head

//     while(current && current.next){
//         if(current.val === current.next.val){
//              current.next = current.next.next
//         }else{
//             current = current.next
//         }
//     }
//    return head

if(!head || !head.next) return head
var current = head
var fast

while(current){
    fast = current
    while(fast && current.val === fast.val ){
        fast = fast.next
    }
    current.next = fast
    current = fast
}
};

console.log(deleteDuplicates([1,1,2]))