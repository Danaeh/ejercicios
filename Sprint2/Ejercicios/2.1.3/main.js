var baraja;
var NumerosBarajaC= [];
var NumerosBarajaD= [];
var NumerosBarajaT= [];
var NumerosBarajaP= [];
for (i=1; i<13; i=i+1){
  Corazones={palo:"C", valor:NumerosBarajaC[NumerosBarajaC.length]=i};
  Diamantes={palo:"D", valor:NumerosBarajaD[NumerosBarajaD.length]=i};
  Treboles={palo:"T", valor:NumerosBarajaT[NumerosBarajaT.length]=i};
  Picas={palo:"P", valor:NumerosBarajaP[NumerosBarajaP.length]=i};
}

PPicas=[];
PCora=[];
PDiam=[];
PTreb=[];
for (i=0;i<NumerosBarajaP.length; i=i+1){
  PPicas[i]=NumerosBarajaP[i]+ Picas.palo ;
  PCora[i]=NumerosBarajaC[i]+ Corazones.palo;
  PTreb[i]=NumerosBarajaT[i]+Treboles.palo;
  PDiam[i]=NumerosBarajaD[i]+Diamantes.palo;
}

baraja= [PCora, PDiam,PTreb, PPicas];
/*
var Pi={};
var Tr={};
var Di= {};
var Co= {};
for (i=0; i<NumerosBarajaC.length;i++){
  Pi={"carta"+i : }
}*/

//Ejercicio2
var rojas= [];
var negras=[];

for (i=0; i<baraja.length;i++){
  if (i<=1){
    for (j=0; j<PCora.length;j++){
      rojas[rojas.length]= baraja[i][j];
    }
  }
  else {
    for(j=0; j<PPicas.length;j++)
    negras[negras.length]=baraja[i][j];
  }
}
//Ejercicio 3
