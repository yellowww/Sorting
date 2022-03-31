const quickSort = (arr,method,start,end) => {
    if(start == undefined || end == undefined) {start=0;end=arr.length-1};
    if(start>=end) return;
    let index = partition(arr,method,start,end);
    quickSort(arr, method, start, index-1);
    quickSort(arr, method, index+1,end);
    return arr;
}

const partition = (arr,method,start,end) => {
    let pivot = arr[end];
    let pivotIndex = start;
    for(let i=start;i<end;i++) {
        if(method(arr[i],pivot)) {
            const val0 = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = val0;
            pivotIndex++;
        }
    }
    const val0 = arr[end];
    arr[end] = arr[pivotIndex];
    arr[pivotIndex] = val0;
    return pivotIndex;
}

//quickSort(unsorted, (e0,e1)=>{return e0<e1});
exports.sort = quickSort;