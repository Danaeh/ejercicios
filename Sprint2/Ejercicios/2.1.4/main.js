//Ejercicio 1
function puntuar(mano){
  var total= 0;
  for (i=0; i<mano.length; i++){
    if (mano[i].valor===1){
    mano[i].valor=20;
  }
    total= total + mano[i].valor;

    }
  }
    return total;
}
var carta1=  {palo:"c", valor:3};
var carta2= {palo:"t", valor:7};
var carta3=  {palo:"d", valor:1};
var carta4= {palo:"p", valor:9};
var carta5=  {palo:"c", valor:2};
var carta6= {palo:"d", valor:6};
var mano=[carta1,carta2,carta3, carta4, carta5, carta6];

//Ejercicio2

function puntuar(mano){
  var total= 0;
  for (i=0; i<mano.length; i++){
      if (mano[i].valor===1){
      mano[i].valor=20;
    }
    if((mano[i].palo==="d")||(mano[i].palo==="c")){
      mano[i].valor= mano[i].valor*2;
    }
    total= total + mano[i].valor;
  }
    return total;
}
var carta1=  {palo:"p", valor:3};
var carta2= {palo:"t", valor:7};
var carta3=  {palo:"p", valor:1};
var carta4= {palo:"p", valor:9};
var carta5=  {palo:"p", valor:2};
var carta6= {palo:"t", valor:6};
var mano=[carta1,carta2,carta3, carta4, carta5, carta6];



//Ejercicio3

function puntuar(mano){
  var total= 0;
  for (i=0; i<mano.length; i++){
      if (mano[i].valor===1){
      mano[i].valor=20;
    }
    total= total + mano[i].valor;
  }
    return total;
}


function compara(mano, mano2){
  var ganador;
  totalMano= puntuar(mano);
  totalMano2= puntuar(mano2);
  if(totalMano<totalMano2){
    ganador= totalMano2;
  }
  else{
    ganador=totalMano;
  }
    return ganador;
}

var carta1=  {palo:"p", valor:3};
var carta2= {palo:"t", valor:7};
var carta3=  {palo:"p", valor:1};
var carta4= {palo:"p", valor:9};
var carta5=  {palo:"p", valor:2};
var carta6= {palo:"t", valor:6};
var mano=[carta1,carta2,carta3, carta4, carta5, carta6];

var carta7=  {palo:"p", valor:9};
var carta8= {palo:"t", valor:2};
var carta9=  {palo:"p", valor:1};
var carta10= {palo:"p", valor:5};
var carta11=  {palo:"p", valor:6};
var carta12= {palo:"t", valor:3};
var mano2=[carta7,carta8,carta9,carta10,carta11,carta12];
