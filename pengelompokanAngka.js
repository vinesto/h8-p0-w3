function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var arrGenap=[];
  var arrGanjil=[];
  var arrKel=[];
  var arrResult=[];
  for(i=0;i<arr.length; i++){
    if(arr[i]%2 !== 0 && arr[i]%3!==0){
      arrGanjil.push(arr[i]);
      //console.log(arrNew);
    } else if(arr[i]%2 === 0 && arr[i]%3!==0){
      arrGenap.push(arr[i]);
      //console.log(arrGenap)
    } else if (arr[i]%3===0){
      arrKel.push(arr[i]);
    }

  }
  arrResult.push(arrGenap, arrGanjil, arrKel);
  return arrResult;

  // console.log(arrResult);
}

// TEST CASES
//console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]
