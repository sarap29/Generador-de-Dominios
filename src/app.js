var pronouns = ["the", "our"];
var adjectives = ["great", "big"];
var nouns = ["jogger", "racoon"];
var extensions = ["com", "net", "us", "io"];

let domainNames = [];
for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < nouns.length; l++) {
        var domainName =
          pronouns[i] + adjectives[j] + nouns[k] + "." + extensions[l];
        domainNames.push(domainName);
      }
    }
  }
}

for (let m = 0; m < domainNames.length; m++) {
  console.log(domainNames[m]);
}