var merge = function(intervals) {
    let startIndex = 0
    let endIndex = 1

    intervals.sort((a,b)=>a[startIndex]-b[startIndex])

    let mergedIntervalsResult =[]
    
    let mergedStart = intervals[0][startIndex]
    let mergedEnd = intervals[0][endIndex]

    for(i=1;i<intervals.length;i++){
const nextInterval = intervals[i]
if(nextInterval[startIndex]<=mergedEnd){
    mergedEnd = Math.max(mergedEnd,nextInterval[endIndex])
}
else{
    mergedIntervalsResult.push([mergedStart,mergedEnd])
    mergedStart = nextInterval[startIndex]
    mergedEnd = nextInterval[endIndex]
}
    }

    mergedIntervalsResult.push([mergedStart,mergedEnd])
    return mergedIntervalsResult
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))