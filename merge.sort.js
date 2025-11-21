function merge(arr1, arr2)  {
    let i = 0
    let j = 0
    let result = []
    while (i < arr1.length && j < arr2.length)  {
        if (arr1[i] < arr2[j])  {
            result.push (arr1[i])
            i++
        }
        else {
            result.push(arr2[j])
            j++
        }
    }
    if (i < arr1.length){
        for (let r = i; r < arr1.length; r++)   {
            result.push(arr1[r])
        }

    }
    if (j < arr2.length){
        for (let t = j; t < arr2.length; t++) {
            result.push(arr2[t])
        }
    }
    return result
}

function mergeSort (arr){
    if (arr.length == 0){
        return []
    }

    if (arr.length == 1) {
        return arr
    }

    const middleIndex = Math.round(arr.length / 2)
    const arr1 = arr.slice(0, middleIndex)
    const arr2 = arr.slice(middleIndex, arr.length)
    
    console.log({middleIndex, arr1, arr2})
    return merge(mergeSort(arr1), mergeSort(arr2))

}
   
const sorted = mergeSort([2, -9, 8, 19,])
console.log(sorted)