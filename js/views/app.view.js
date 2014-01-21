var app = app || {}; 

// The Application
// ---------------

app.AppView = Backbone.View.extend({
    el: '#predictive-app',

    events: {
        'submit #search-form': 'onFormSubmit',
    },

    letterMap: [
        'abc',  // 2
        'def',  // 3
        'ghi',  // 4
        'jkh',  // 5
        'mno',  // 6
        'pqrs', // 7
        'tuv',  // 8
        'wxyz', // 9
    ],

    wordsInDataset: [],

    onFormSubmit: function (e) {
        var inputValue = $('#search', e.target).val(),
            word = this.parseData(inputValue),
            words = this.getCombinations(word);

        // _.each(words, this.isWordInDataset);
        // console.log( this.model.get('alice'));
        console.log( app.Dataset );
    },

    isWordInDataset: function (value, key, list) {
        var keyString = value.join('');

        if (this.model.get(keyString)) {
            this.wordsInDataset.push(keyString);
        }
    },

    parseData: function (data) {
        var textMap = _.map(data.split(''), this.mapLetter, this);

        return textMap;
    },

    mapLetter: function (value) {
        if (value === '0' || value === '1' ) {
            var errorText = 'Error. This number doesn\'t have a ';
                errorText += 'equivalent in a numeric key pad.';

            alert(errorText);

            throw new Error('Invalid number');
        }

        if (!parseInt(value)) {
            var errorText = 'Error. Invalid characters. This field just ';
                errorText += 'accept numbers.';

            alert(errorText);

            throw new Error('Invalid number');

        }

        return this.letterMap[value - 2];
    },

    // Original: https://gist.github.com/textarcana/5737478
    getCombinations: function (collection) {
        var current,
        subarray,
        result = [],
        currentArray = [],
        newResultArray = [];

        if (collection.length){
            current = collection.shift();
            result = this.getCombinations(collection);

            currentArray.push(current);

            result.map(function(list) {
                newResultArray.push(list.slice(0));
                list.push(current);
            });

            result.push(currentArray);
            result = result.concat(newResultArray);
        }

        return result;
    }
});