import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    bigCursor: function() {
      Ember.$('body').toggleClass('big-cursor');
    }
  }

});