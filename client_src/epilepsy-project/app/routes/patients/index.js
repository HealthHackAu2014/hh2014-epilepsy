import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

  model: function(params) {
    return ajax('http://115.146.95.69:8000/patients/?format=json');
  }
});