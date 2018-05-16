function targetTerdekat(arr){
var arrX=[]
var result=0;
var arrJarak=[];

for(i=0;i<arr.length;i++){
  var cariX=[];
  var cariO;
  if(arr[i]==='o'){
    cariO=i;
  } else if(arr[i]==='x'){
cariX=i;
arrX.push(cariX);
}
}
for(j=0; j<arrX.length;j++){
  arrJarak[j] = arrX[j]-cariO;
if(arrJarak[j]<0){
  arrJarak[j] = arrJarak[j]*-1;
  }
}
arrJarak.sort(function(a,b){return a>b});
if (arrJarak.length > 0) {
result=arrJarak[0];
}
return result;

}


// TEST CASES
//console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
