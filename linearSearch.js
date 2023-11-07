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

