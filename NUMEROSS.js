var johnatanMillan = [11,23,2,3,4,5,6]; 
var b = 0; 
var i=0;
var t=0;
console.log("numeros primos");
while(i<johnatanMillan .length) 
{
if(johnatanMillan [i]!=0) 
{
for(var k=1; t<=johnatanMillan [i]; t++){ 
if((johnatanMillan [i] % t) == 0){ // si el modulo o reciduo es = 0
b++; //aumenta esta variable
}
}
if(b==2){ 
console.log("primo el: ",johnatanMillan [i]); 
b=0;
}else{
b=0;
}
i++;
}
}
i=0;  
console.log("numeros pares e impares");
while(i<johnatanMillan .length)
{
if(johnatanMillan [i]!=0)
{
if((johnatanMillan [i] % 2) == 0){   
console.log("par el",johnatanMillan [i]);
}else{
if((johnatanMillan [i] % 2) == 1){
console.log("impar el",johnatanMillan [i]);
}
}
i++;
}
}
