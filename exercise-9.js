function cariMean(arr) {
  var sumArr=0;
for(i=0;i<arr.length;i++){
  sumArr += arr[i];
}
var sumDiv=Math.round(sumArr/arr.length);
return sumDiv

}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
