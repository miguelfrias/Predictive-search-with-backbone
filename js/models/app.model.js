var app = app || {};

app.DataModel = Backbone.Model.extend({
    
    // Default attributes ensure that each todo created has `title` and // `completed` keys.
    defaults: {
        name: 'alice',
        count: 1,
        relevancy: 1
    },

});