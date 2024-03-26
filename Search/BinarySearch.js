class SearchTrre{

      search(array,target){
        console.log("inside search")
        let l = 0
        let r = array.length - 1
        let m = Math.round((l+r)/2)
        while(l<=r){
            
            console.log("l value is ==>",l)
            console.log("r value is ==>",r)
            console.log("m value is ==>",m)
              if(array[m] == target){
                console.log("inside m")
                return m
            } 
            
            if(array[m]<target){
                console.log("inside l")
                 l = m + 1
                 console.log("l = m + 1 value is ==>",l)
              
                
            }else{
                console.log("inside r")
                 r = m - 1
                 console.log("r =  m -1 value is ==>",r)
              
            }
            m = Math.round((l+r)/2)
        
            }
            return -1
        }
}


var ll = new SearchTrre()
var val = ll.search([-1,0,3,4,5,7,8,9,12],12)
console.log("val=>",val)