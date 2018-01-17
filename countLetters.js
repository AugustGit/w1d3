
function countLetters(str){


  var wordCount = {}
  var noSpaces = str.split(" ").join("").toLowerCase();

  for (var i = 0; i < noSpaces.length; i++) {
    if (wordCount[noSpaces[i]]) {

    wordCount[noSpaces[i]] += 1

    } else {

    wordCount[noSpaces[i]] = 1
  }
 }
 return wordCount
}

console.log(countLetters("lighthouse in the house"))

