//1-. Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio='30 días de JavaScript';
//2-. Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio);
//3-. Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length);
//4-. Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(desafio.toUpperCase());
//5-. Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(desafio.toLowerCase());
//6-. Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substring(0, 2));// primer argumento desde donde empieza, segundo argumento donde acaba
//7-. Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
let frase="Days Of JavaScript de 30 Days Of JavaScript";
let particion=frase.split(" ");//parte la cadena
console.log(particion);//imprime la particion de la frase
console.log(frase[1]);//imprime el caracter de la posicion [1]
console.log(particion[1]);//imprime la palabra de la posicion[1]
//8-. Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(frase.includes("Script"));//busca la palabra en la frase
//9-.  Divide la cadena en un array usando el método split()
console.log(frase.split(" "));//parte la cadena por los espacios
//10-. Divida la cadena 30 días de JavaScript en el espacio usando el método split()
let frase2="30 días de JavaScript";
console.log(frase2.split(" "));
//11-. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let frase3='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(frase3.split(","));
//12-. Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(frase2.replace("JavaScript","Python"))//primer parametro palabra a sustituir, segundo palabra por la que se quiere cambiar
//13-. ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(frase2.charAt(15));//paramétro indice que se quiere buscar
//14-. Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(frase2.charCodeAt("J"));//devuelve el código ASCII del valor de ese indice
//15-. Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(frase2.indexOf("a"));
//16-. Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(frase2.lastIndexOf("a"));
//17-. Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente 
//oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let frase4="No puedes terminar una oración con porque porque porque es una conjunción";
console.log(frase4.indexOf("porque"));
//18-. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente 
//oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(frase4.lastIndexOf("porque"));
//19-. Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente 
//oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(frase4.search("porque"));//devuelve el indice de la primera coincidencia
//20-. Use trim() para eliminar cualquier espacio en blanco final al principio y 
//al final de una cadena. Por ejemplo, '30 días de JavaScript'.
console.log(frase2.trim(" "));//quita el espacio en blaco final
//21-. Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(frase2.startsWith("30"));//empieza por 30
//22-. Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(frase2.endsWith("Script"));
//23-. Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(frase2.match("a"));
//24-. Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let cadena1='30 días de';
let cadena2='JavaScript';
let cadena3='30 días de JavaScript';
console.log(cadena1.concat(cadena2,cadena3));
//25-. Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(frase2.repeat(2));//imprime según las veces que se pasen por parámetro.

