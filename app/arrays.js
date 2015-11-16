exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        return arr.indexOf(item);
    },
    sum: function(arr) {
        var total = 0;
        arr.forEach(function(el, idx, arr) {
            total += el;
        });
        return total;
    },
// worked through with Nathan  
    remove: function(arr, item) {
        return _.reject(arr, function(el) {
            return el === item;
        })
    },
    removeWithoutCopy: function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
        return array;
    },
    append: function(arr, item) {
        arr.push(item);
        return arr;
    },
    truncate: function(arr) {
        arr.pop();
        return arr;
    },
    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },
    curtail: function(arr) {
        arr.shift(item);
        return arr;
    },
    concat: function(arr1, arr2) {
        return arr1.concat(arr2);
    },
    insert: function(arr, item, index) {
        arr.splice(idx, 0, item); //splice takes index and element
        return arr;
    },
    count: function(arr, item) {
        count = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === item)
                {  count++; }

        }
        return count;
    },
    //got some help from MDN Shanimal
    duplicates: function(arr) {
        var newArray = _.uniq(list, function(item, key, a) {
            return item.a;
        });
    },
    // Math.pow one way to do this
    square: function(arr) {
        for (var i = 0; i < array.length; i++) {
            array[i] *= array[i];
        }
        return arr;
    },
    findAllOccurrences: function(arr, target) {
        var occurrences = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] === target) {
                occurrences.push(i);
            }
        }
            return occurrences;
    }
};
