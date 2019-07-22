var i;
for (i = 1; i <= 10; i ++){
    console.log(i);
}
sexo = "feminino";
switch (sexo) {
    case "feminino":
    console.log("Tudo bem com a senhora!");
    break;
    case false:
    console.log("Tudo bem com o senhor!");
}
var i;
for (i = 1; i <= 10; i ++){
    console.log(i);

var langs = ["html", "css", "javaScript"]
var localizacao = langs[0]
console.log(localizacao) 

var langs = ["html", "css", "javaScript"];
var tam = langa.length; //tam = 3

//vetor
var langs = ["html", "css", "javaScript"]
//vetor chamado o próprio vetor e a função lengtn
//ess função acrescenta 
langs [langs.length] = "php"
//imprimir a função
console.log(langs)

var langs = ["html", "css", "javaScript"];
var last = langs.pop ();
//renove o último elemento do vator e o retorna

var langs = ["html", "css", "javaScript"];
var first = langs.shift ();
//remove o último elemento do vetor e o retorna

var langs = ["html", "css", "javaScript"];
var novotam = langas.unahift("PHP");
/*adiciiona "PHP" no inicio do vetor e retorna o 
novo tamanho (4) */

//Typeof
typeof 2014;
typeof 3.14;
typeof "html";
typeof [1, 2, 3];
typeof false;

var data1 = new Date();
//data1 = data atual
var data2 = new Date("November 17, 2014 12:15:00");
//data2 = Mon Vov 17 2014 12:15:00
var data3 = new Date(7890787445);
//data3 = Thu Apr 02 1970 04:53:07
var data4 = new Date(2014, 11, 8, 13, 10, 30, 0);
//data4 = Mon Dec 08 2014 13:10:30

var data = new Date(2014, 11, 8, 13, 10, 0);
document.write(data + "<br/>");
document.write(data.toUTCString() + "<br/>.");
document.write(data.toDateString());

var frase = "A linguagem javaScript é fácil"
var pos1 = frase.indexOf("linguagem")
console.log(pos1)

var frase = "A linguagem Jarascript é fácil!";
var sub1 = frase.slice(12, 22); //sub = "Javascript"
var sub2 = frase.substring(2, 11); //sub2 = "linguagem"
var sub3 = frase.slice(25); //sub = "fácil!"
console.log(sub1)

var frase = "A linguagem Javascript é fácil!";
var sub = frase.substr(2, 9); //sub = "linguagem"
console.log(sub)

var frase = "A linguagem HTML é fácil!";
var novaFrase = frase.replace("Javascript", "HTML");
//novaFrase = "A linguagem HTML é fácil"
console.log(novaFrase)

var frase = "Hello World!";
var fraseUp = frase.toUpperCase(); //fraseUp = "HELLO WORLD!"
var fraseLow = frase.toLowerCase(); //fraseLow = "hello world!"
console.log(fraseLow)

var lang = "Javascript";
var c = lang.charAt(3); //c = "a"
var cod = lang.charCodeAt (3); //cod = 97
console.log(cod)

var langs = "HTML CSS Javascript";
var vet1 = langs.split(" ")
console.log(vet1)
//vet1 = ["HTML", "CSS", "Javascript"]
var fruits = "uva!laranja!maçã";
var vet2 = fruits.split(" ! ");
//vet2 = ["uva", "laranja", "maçã"]
console.log(vet2)

var x = 2;
var y = 5;
var z = x + y;
console.log(z);

function soma(num1, num2){
    return num1+num2;
}
var a = 5;
var b = 2;
var c = soma(a,b);
document.write(c);

function fatorial (num) {
    var fat = 1, i;
    for(i = 2; i <= num; i++) {
        fat = fat*i;
    }
    return fat;
}

var n= prompt("Digita um número:");
n = parseInt(n);
document.write(n + "! = " + fatorial(n));

document.getElementById("teste").innerHTML = "Olá Wender";

document.getElementById("myimg").src = "IMA Creed.jpg";

document.getElementById("dcc").href = "http://www.ufjf.br/deptocomputacao/";

document.body.style.backgroundColor = "green";
document.body.style.color = "yellow";

document.getElementById("titulo").style.color.color = "red";