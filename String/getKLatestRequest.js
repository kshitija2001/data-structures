function getKLatestRequest(arr,k){
    const len = arr.length - 1
    let result = []
for(let i= len;i>0;i--){
    console.log(arr[i])
    if(!result.includes(arr[i])){
        result.push(arr[i])

    }else{
        continue
    }

}
return result
}
console.log(getKLatestRequest(["item1","item2","item3","item1","item3"],3))