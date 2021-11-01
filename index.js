// filteredArray should use the for loop to:
// return a filtered version of the passed array such that
// any array nested within arr caontaining elem has been removed


function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let validArr = arr[i].find(x => x === elem)
    console.log(validArr)
    if (validArr === undefined) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 2));