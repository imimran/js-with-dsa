function linearSearch (arr, value) {
   
      for (let i = 0; i < arr.length; i++){
        console.log("i",i);
        if(arr[i] === value){
            return i
        }
      }
      return -1
}

console.log("linearSearch",linearSearch([2,3,5,6,8], 9))

function binarySearch (arr, value){
  let left = 0
  let mid = 0
  let  n = arr.length
  let right = n-1

  while( left <= right){
  mid = parseInt((left + right) / 2)
  console.log("mid", mid)
  if(arr[mid] == value){
    return mid
  }

  if(arr[mid] < value){
    left = mid + 1;
    console.log("left", left)
  } else{
    right = mid - 1
  }

  }
  return -1
}

console.log("binarySearch", binarySearch([1,2,3,4,5, 7, 8], 5))