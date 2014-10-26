import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.ObjectController.extend({

  api: "http://115.146.95.69:8000",

  fetchData: function() {
    return ajax(this.get('api') + "/patients/?format=json");
  }.property('api'),

  seizureData: function() {
    this.get('fetchData')
    .then(function(data) {
      var seizures = data[0]['seizures'];
      seizures = this.setupSeizureData(seizures);
      this.set('seizureData', seizures);
    }.bind(this));
  }.property('fetchData'),

  medicationData: function() {
    this.get('fetchData')
    .then(function(data) {
      var medications = data[0]['medications'];
      medications = this.setupMedicationData(medications);
      this.set('medicationData', medications);
    }.bind(this));
  }.property('fetchData'),

  setupSeizureData: function(data) {
    data.forEach( function(datum) {
      var parsedDate = Date.parse(datum.assessment_date);
      
      datum.assessment_date = parsedDate;

      datum['tooltip'] = {
        assessment_date  : moment(parsedDate).format("MMMM Do YYYY"),
        frequency        : datum.frequency,
        severity         : datum.episode_severity,
        event_confidence : datum.event_confidence
      }
    });

    data['meta'] = {
      domain : 'assessment_date',
      value  : 'episode_severity',
      level  : 'primary',
      type   : 'bar',
      title  : 'Seizure Frequency'
    };

    return data;
  },

  setupMedicationData: function(data) {
    data.forEach( function(datum) {
      var parsedDate = Date.parse(datum.date);

      datum.date = parsedDate;

      datum['tooltip'] = {
        date            : moment(parsedDate).format("MMMM Do YYYY"),
        frequency       : datum.frequency,
        name            : datum.name,
        dosage          : datum.dosage,
        dose_unit       : datum.dose_unit,
        no_medications  : datum.no_medications
      }
    });

    data['meta'] = {
      domain : 'date',
      value  : 'dosage',
      level  : 'secondary',
      type   : 'line',
      title  : 'Medications Dosage'
    };

    return data;

  }


});