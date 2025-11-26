
function binarySearchIterative(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
  
    const mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }

  return -1;
}


function binarySearchRecursive(arr, target) {
  function helper(lo, hi) {
    if (lo > hi) return -1;
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return helper(mid + 1, hi);
    return helper(lo, mid - 1);
  }
  return helper(0, arr.length - 1);
}


function lowerBoundIndex(arr, target) {
  let lo = 0;
  let hi = arr.length; 
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid;
  }

  if (lo < arr.length && arr[lo] === target) return lo;
  return -1;
}


function lowerBoundInsertionPosition(arr, target) {
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid;
  }
  return lo; 
}

function upperBoundInsertionPosition(arr, target) {
  let lo = 0;
  let hi = arr.length;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] <= target) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

const a = [1, 2, 2, 2, 3, 5, 8];

console.log('iterative search 2 ->', binarySearchIterative(a, 2)); 
console.log('recursive search 5 ->', binarySearchRecursive(a, 5)); 
console.log('first occurrence of 2 ->', lowerBoundIndex(a, 2)); 
console.log('insert pos for 0 ->', lowerBoundInsertionPosition(a, 0)); 
console.log('insert pos for 4 ->', lowerBoundInsertionPosition(a, 4)); 
console.log('upper bound pos for 2 ->', upperBoundInsertionPosition(a, 2)); 
console.log('search missing 7 ->', binarySearchIterative(a, 7)); 