import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('patients', {path: '/records/visual'}, function() {
    this.route('show', {path: '/:patient_id'});
  });
});

export default Router;
