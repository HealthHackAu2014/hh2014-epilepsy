import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper( function(date, options) {

  var format = options.hash.format || 'MMMM Do YYYY',
      formatted;
  
  if (Ember.isEmpty(date))
    formatted = "";
  else
    formatted = moment(date).format(format);

  return formatted;
});

