exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },
  wordWrap: function(str, cols) {

  },

  // working on this. found some ideas http://www.thatjsdude.com/interview/js1.html#string_reverse

  reverseString: function(str) {
    var reverseStr = '';
    for(var i = str.length-1; i>=0;i--){
      reverseStr +=str[i];
    }
    return reverseStr;
  }

  }
};
