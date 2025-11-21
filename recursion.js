function findMin(arr, index = 0) {
    if (index === arr.length - 1) {
        return arr[index];
    }

    let minOfRest = findMin(arr, index + 1);
    return arr[index] < minOfRest ? arr[index] : minOfRest;
}

console.log(findMin([5, 2, 9, 1, 3])); 
