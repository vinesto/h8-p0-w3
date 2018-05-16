function pasanganTerbesar(num) {
  // you can only write your code here!
  var numStr=String(num);
  var pisah=numStr.split("");
  var a=0;
  var arrayBaru=[];

  for(i=0; i<pisah.length;i++){
    pasangan=pisah.slice(a,a+2);
    a+=1;
    pasangan=pasangan.join('');
    arrayBaru.push(pasangan);
  }
  arrayBaru.sort(function(a,b){return a<b});
  var result= Number(arrayBaru[0]);
  return result;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
