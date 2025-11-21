function stableSortBy(arr, keyFn, compareFn = (a,b) => a - b) {
  return arr
    .map((v, i) => ({v, key: keyFn(v), i}))
    .sort((A, B) => {
      const c = compareFn(A.key, B.key);
      return c !== 0 ? c : A.i - B.i 
    })
    .map(x => x.v);
}
f