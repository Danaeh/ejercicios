var nro= Math.floor(Math.random() *10);
var cont =[];
var max=  10;

function creaArray(){
  for (i=0; i<max; i++){
    cont[cont.length]= Math.floor(Math.random() *10);
  }
  return cont;
}


function calcula(number, numberList){
  creaArray(cont)
  var total=0;
  for( i=0; i<numberList.length; i++){
    if( numberList[i]=== number){
      total= total++;
    }
  }
  return total;
}
