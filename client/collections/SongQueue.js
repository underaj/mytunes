// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // this.set('playFirst', function() {});
    this.on('add', function(e) {
      console.log('song added to queue', e);
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(e) {
      console.log('song ended:', e);
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
  },



});


SongQueue.prototype.playFirst = function() {

};


