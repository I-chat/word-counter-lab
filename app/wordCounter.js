var wordCounter = function (word) {
  var wordArray = word.split(/\s+/);  // splits string into an array
  var counter = {};
  for (var i in wordArray) { 
    if (wordArray[i] !== '') {
      if (counter.hasOwnProperty(wordArray[i])) { //checks if object has property wordArray[i]
        counter[wordArray[i]] += 1;
      } else{
        counter[wordArray[i]] = 1;
      }
    }
  }
  return counter;
};

module.exports = wordCounter