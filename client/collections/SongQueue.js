// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // this.set('playFirst', function() {});
    this.on('add', function(e) {

      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(e) {
      var song = this.shift();
      // song.dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);
  },



});


SongQueue.prototype.playFirst = function() {
  this.at(0).play();
};


