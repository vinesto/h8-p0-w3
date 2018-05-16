var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){

input1=input.splice(1,1,'Roman Alamsyah Elsharawy');
input1=input.splice(2,1,'Provinsi Bandar Lampung');
input1=input.splice(4,0,'Pria');
input1=input.splice(5,1,'SMA Internasional Metro')
input1=input
console.log(input1);

//var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
input2=input[3].split('/');
input2=input2[1];

switch (Number(input2[1])){
      case 1: console.log(' Januari '); break;
      case 2: console.log(' Februari '); break;
      case 3: console.log(' Maret '); break;
      case 4: console.log(' April '); break;
      case 5: console.log(' Mei '); break;
      case 6: console.log(' Juni '); break;
      case 7: console.log(' Juli '); break;
      case 8: console.log(' Agustus '); break;
      case 9: console.log(' September '); break;
      case 10: console.log(' Oktober '); break;
      case 11: console.log(' November '); break;
      case 12: console.log(' Desember '); break;
      default: console.log('invalid input'); break;

}
         
input3=input[3].split('/');
//input3=Number(input3);
input3=input3.sort(function (a,b){
  return Number(a)<Number(b)
})
console.log(input3);

input4=input[3].split('/');
input4=input4.join('-');
console.log(input4);

input5=input[1].slice(0,15);
console.log(input5);
 
  
}

dataHandling2(input);