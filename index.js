const prompt = require("prompt-sync")(); 
volantines=[];
suma=0;
menor=9;
// 10, 5, 30, 15
for (let i=0 ; i<=4;i++ ){
    cant=parseInt(prompt(`Cuantos volantines hizo el dia ${i+1}:`));
    volantines.push(cant)
    suma= suma + cant;
    if (volantines[i]<menor){
        menor=volantines[i];
        dia=i+1;
    }

}
console.log ("El total de volantines es ", suma)
console.log ("El promedio es ", suma/volantines.length)
console.log ("Hubo menos volantines el dia ", dia)
