function isAnagram(str1, str2) {
  var result = false;

  var sorted1 = (str1.toLowerCase()).split('').sort().join();
  var sorted2 = (str2.toLowerCase()).split('').sort().join();

  if(sorted1 === sorted2)
    result = true;

  return result;
}

console.log('isAnagram("stuff", "ftusf") = ' + isAnagram("stuff", "ftusf"));  //true
console.log('isAnagram("stuff", "fuusf") = ' + isAnagram("stuff", "fuusf"));  //false

// Stretch
//
// The program can take a string and an array of words e.g. "examples" and ["pameesxl", "woamxapl", "emaplsic"]. The output is an array of words that are anagrams from the list inputed.

function isAnagramStretch(str1, arrWords) {
  var result = [];

  var sorted1 = (str1.toLowerCase()).split('').sort().join();

  for (var i = 0; i < arrWords.length; i++) {
    var sorted2 = (arrWords[i].toLowerCase()).split('').sort().join();
    if(sorted1 === sorted2)
      result.push(arrWords[i]);
  }

  return result;
}

console.log('isAnagramStretch("stuff", ["sutff", "gheheha", "sfftu", "hoih"]) = ' + isAnagramStretch("stuff", ["sutff", "gheheha", "sfftu", "hoih"]));  //["sutff", "sfftu"]
