// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs',

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch({remove: false});
  }

});