var app = app || {}; 

// console.log(app.DataModel);

var DataCollection = Backbone.Collection.extend({

    model: app.DataModel,

    // The collection of todos is backed by *localStorage* instead of a remote // server.
    localStorage: new Backbone.LocalStorage('predictive-backbone')

});

// Create our global collection of **Todos**.
app.Dataset = new DataCollection();