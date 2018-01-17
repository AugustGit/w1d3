function positionLetters(str){


  var wordCount = {}
  var noSpaces = str.split(" ").join("").toLowerCase();

  for (var i = 0; i < noSpaces.length; i++) {
    if (wordCount[noSpaces[i]]) {

    wordCount[noSpaces[i]].push(i);

    } else {

    wordCount[noSpaces[i]] = [i]
  }
 }
 return wordCount
}

console.log(positionLetters("lighthouse in the house"))
