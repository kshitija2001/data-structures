function reduceTosingleEle(arr){
 //[25,10,20]
 let total = 0
    while(arr.length>1){
      
      const first = arr.pop()
      const second = arr.pop()
        const first_sum =  first +  second 
       
        total = total + first_sum
        arr.push(first_sum)
        console.log(arr)
        
    }
    
    console.log(total)
    
   
}

reduceTosingleEle([25,10,20,40])