exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {

  // call and apply for some of these I think
//  thanks for much needed assistance in completing these to http://jonathannicol.com/blog/2012/04/15/test-your-javascript-skills-with-js-assessment/
// Got stuck quite a bit

  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  // fn = function (opts) {
  //   // Call the sayIt() function in the context of 'this'
  //   // and pass it the 'opts' array.
  //   return sayIt.apply(this, opts);
  // };

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  // fn = function (opts){
  //   // Call the speak() function in the context of 'obj'.
  //   return speak.call(obj);
  // };

  functionFunction : function(str) {
    return function(sentence) {
    return str + " , "  + sentence;
   }
  },

  makeClosures : function(arr, fn) {
    return _.map(arr, function(elem) {
      return function(){
        return fn(elem);
      }
    } )
  },

  partial : function(fn, str1, str2) {
    var partFunk = function (elem) {
      return fn(str1, str2, elem);
    };
      return partFunk;
  };

  },

  useArguments : function() {
    return  _.reduce(arguments, function(a,b){
                    return a + b;
      });
  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
