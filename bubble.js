const doBubbleIteration = (array,method) => {
    let newArray = array.slice();
    let switches = 0;
    for(let i=0;i<array.length-1;i++) {
        if(method(newArray[i],newArray[i+1])) {
            switches++;
            const val = newArray[i];
            newArray.splice(i,1);
            newArray.splice(i+1,0,val);
            i++;
        }
    }
    return {array:newArray,switches:switches};
};

const bubbleSort = (array, method) => {
    let isSorted = false;
    let sortedArray = array.slice();
    let tracker = {iterations:0,switches:0,items:array.length};
    while(!isSorted) {
        const thisIteration = doBubbleIteration(sortedArray,method);
        tracker.switches+=thisIteration.switches;
        tracker.iterations+=array.length-1;
        isSorted = thisIteration.switches==0;
        sortedArray = thisIteration.array;
    }
    return {sorted:sortedArray,tracker:tracker};
}
//bubbleSort(unsorted, (e0,e1)=>{return e0<e1});
exports.sort = bubbleSort;