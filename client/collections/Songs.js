// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs',  

  parse: function(response) {
    console.log('parse:', response);
    return response.results;
  },

  initialize: function() {
    this.fetch({remove: false});
  },

  search: function(title) {
    // title = title.replace("'", "\'");
    // title = title.split(' ').map(function(val) {
    //   return val[0].toUpperCase() + val.slice(1).toLowerCase();
    // }).join(' ');

    // this.url = 'https://api.parse.com/1/classes/songs?where={"title":"' + title + '"}';
    title = "Wanna";
    this.fetch({
      remove: true,
      data: {
        where: {
          title: {
            $regex: "^You"
          }
        }
      }
    });
  } 

});

// ?where={"title":"I Don\'t Wanna"}'