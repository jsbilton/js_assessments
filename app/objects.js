exports = (typeof window === 'undefined') ? global : window;
exports.objectsAnswers = {
    alterContext: function(fn, obj) {
        return fn.call(obj);
    },
    alterObjects: function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },
    iterate: function(obj) {
        var ownProperties = [];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                ownProperties.push(prop + ': ' + obj[prop]);
            }
        }
        return ownProperties;
    }
};




// Got some help on these thanks http://jonathannicol.com/blog/2012/04/15/test-your-javascript-skills-with-js-assessment/

// Alter context
// fn = function () {
//   return a.sayIt.call(b);
// };


// alter multiple objects
// fn = function (greeting) {
//   C.prototype.greeting = greeting;
// };



// Iterate over an objects own properties
// fn = function (obj) {
//   var ownProperties = [];
//   for (var prop in obj) {
//     // hasOwnProperty returns true if the property
//     // belongs to the object, not its prototype chain.
//     if (obj.hasOwnProperty(prop)) {
//       ownProperties.push(prop + ': ' + obj[prop]);
//     }
//   }
//   return ownProperties;
// };
