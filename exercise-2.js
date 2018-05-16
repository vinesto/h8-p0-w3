function balikString(namaYgMauDibalik){
  var result = '';
  for(var i = 1; i <= namaYgMauDibalik.length; i++){
  result += namaYgMauDibalik[namaYgMauDibalik.length-i]  
}
return result
}
console.log(balikNama('hello world'))
