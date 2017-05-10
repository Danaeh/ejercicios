/* Ejercicios anteriores
//EJERCICIO 1

var AñoActual=2017;
var AñoFinal=2050-1;
var Periodo=4;
var CalcUltAñoBi= AñoActual%Periodo;
var UltiAñoBi=AñoActual-CalcUltAñoBi;
var AñosBi= ((AñoFinal-UltiAñoBi)/Periodo)-1;
console.log(AñosBi);


//EJERCICIO 1.5
var BarajapokerNumeros=40;
var negras =BarajapokerNumeros/2;
var paresnegras= negras/2;
console.log(paresnegras);

//EJERCICIO 2
var NueveCor="9C";
var DiezCor= "10C";
var OchoCor= "8C";
var Escalera= OchoCor+NueveCor+DiezCor;
console.log(Escalera);

//EJERCICIO3
var DiezCor="10C";
DiezCor [2];
DiezCor[DiezCor.length -1]
*/
//EJERCICIOS 2.1.2
//Ejercicio1

var cuaCor="4C"
if (cuaCor [cuaCor.length -1]==="C"&& cuaCor[0]==="4") {
  console.log("Es de corazones");
}

//EJERCICIO
var AñosBis= "Años Bisiestos";
for (var i=0; i<2050; i=i+4){
  console.log(AñosBis + i);
}

//EJERCICIO3
var Corazones= "C";
var Diamantes= "D";
var Treboles= "T";
var Picas= "P";
var rojas = Corazones && Diamantes;
for (var cartas= 3; cartas<=12; cartas=cartas+3){
  console.log(rojas + cartas);
}
//mete un if
var palos="CDTP"
var Corazones= "C";
var Diamantes= "D";
var Treboles= "T";
var Picas= "P";
var multiplos= 3;
var resto=0;
for (j=0; j<=palos.length;j++){
  if (palos[j]=== Corazones || palos[j]===Diamantes){

  for(i=1; i<=12; i=i+1){
    if (i%multiplos===0){
      console.log(i+palos[j]);
      }
    }
  }
}
