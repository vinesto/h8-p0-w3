function palindrome(kata) {
  // you can only write your code here!
  var word='';
  var banding=false;
  for(i=1; i<kata.length+1; i++){
    word+=kata[kata.length-i]
    if(word===kata){
      banding=true;
  }
  }
  
  return banding
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false