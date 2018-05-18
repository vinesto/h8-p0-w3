function groupAnimals(animals) {
  // you can only write your code here!
  var arrNew=[];
  var group=[];
  var sortAnimals=animals.sort();
  var hurufDepan=sortAnimals[0][0];
  for(var i = 0; i<animals.length; i++){
    // console.log(animals[i])
    // console.log(animals[i][0])
    if(animals[i][0]===hurufDepan){
      group.push(sortAnimals[i]);
    }else{
      arrNew.push(group);
      group=[];
      hurufDepan=sortAnimals[i][0]
      group.push(sortAnimals[i]);
    }
  }
  arrNew.push(group)
  return arrNew
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
