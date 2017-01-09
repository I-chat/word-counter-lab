var wordCounter = function (word) {
  var wordArray = word.split(/\s+| /);
  var counter = {};
  for (var i in wordArray) {
    if (counter[wordArray[i]] === undefined) {
      counter[wordArray[i]] = 1;
    } else{
      counter[wordArray[i]] += 1;
    }
  }
  return counter;
};

module.exports = wordCounter