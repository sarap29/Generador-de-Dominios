/* eslint-disable */
/*
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = ["com", "es", "net", "eu"];

var nombresDominios = [];

for (var i = 0; i < pronoun.length; i++) {
  for (var j = 0; j < adj.length; j++) {
    for (var k = 0; k < noun.length; k++) {
      for (var l = 0; l < ext.length; i++) {
        let nombreDeDominio = pronoun[i] + adj[j] + noun[k] + "." + ext[l];
        nombresDominios.push(nombreDeDominio);
      }
    }
  }
}
// recorra el nuevo array
for (var m = 0; m < nombresDominios.length; m++) {
  console.log(nombresDominios[l]);
}
