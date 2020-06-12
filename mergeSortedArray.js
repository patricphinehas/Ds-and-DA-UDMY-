function mergeSortedArrays2(arr1,arr2){
    let j=0,k=0
    const arr3 = []

    if (arr1.length === 0){
        return arr2
    }
    if (arr2 === 0) {
        return arr1
    }

    let totalLength = (arr1.length + arr2.length)-1
    console.log(totalLength)
    while(totalLength!==-1){
        console.log( j, k)
        if(!arr2[k] || arr1[j]<arr2[k]){
            arr3.push(arr1[j++])
        }
        else{
            arr3.push(arr2[k++])
        }
        totalLength--
    }
    return arr3
}


function mergeSortedArrays(array1, array2){
    const mergedArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1
    let j = 1

    // check input
    if (array1.length === 0){
        return array2
    }
    if (array2 === 0) {
        return array1
    }

    while(array1Item || array2Item){
        console.log(array1Item,array2Item)
        if (!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item)
            array1Item = array1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = array2[j]
            j++
        }
    }
    
    return mergedArray
}




console.log(mergeSortedArrays2([0,3,4,31,93,98],[4,6,30,34,90]))