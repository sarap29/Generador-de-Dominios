var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = ["com", "es", "net", "eu"];

let nombresDominios = [];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        var nombreDeDominio = 
        pronoun[i] + adj[j] + noun[k] + "." + ext[l];
        nombresDominios.push(nombreDeDominio);
      }
    }
  }
}
// recorra el nuevo array
for (let m = 0; m < nombresDominios.length; m++) {
  console.log(nombresDominios[m]);
}

