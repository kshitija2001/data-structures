var mergeKLists = function(lists) {
    
if(lists.length == 0) return null

var merge2Lists =function(l1,l2){
    if(!l1)  return l2
    if(!l2)  return l1

    if(l1.val < l2.val){
        console.log("l1.val==>",l1)
        console.log("l2.val==>",l2)
        l1.next = merge2Lists(l1.next,l2)
        console.log("l1.next==>",l1.next)
        console.log("returning l1==>",l1)
        return l1
    }else{
        console.log("else l1.val==>",l1)
        console.log("else l2.val==>",l2)
        l2.next = merge2Lists(l2.next,l1)
        console.log("l2.next==>",l2.next)
        console.log("returning l2==>",l2)
        return l2
    }
    
}

for(i=1;i<lists.length;i++){
    lists[0] = merge2Lists(lists[0],lists[i])
    console.log("iteration=>",i,"lists[0]==>",lists[0])
}
return lists[0]

};

//[[1,4,5],[1,3,4],[2,6]]
mergeKLists([[1,4,5],[1,3,4],[2,6]])