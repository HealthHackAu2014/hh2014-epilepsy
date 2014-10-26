import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.ObjectController.extend({

  seizureData: function() {
    return this.setupSeizureData(this.get('seizures'));
  }.property('seizures'),

  medicationData: function() {
    return this.setupMedicationData(this.get('medications'));
  }.property('medications'),

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
      type   : 'dots',
      title  : 'Medications Dosage'
    };

    return data;

  }

});