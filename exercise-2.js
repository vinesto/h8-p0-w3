function balikNama(namaYgMauDibalik){
  var result='';
  for(i=1; i<=namaYgMauDibalik.length; i++){
  result+=namaYgMauDibalik[namaYgMauDibalik.length-i]
  
}
return result
  
  
}
console.log(balikNama('test hello'))
