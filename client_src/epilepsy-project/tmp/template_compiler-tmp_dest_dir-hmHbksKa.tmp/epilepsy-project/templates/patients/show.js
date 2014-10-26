import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <tr>\n      <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "medication.date", options) : helperMissing.call(depth0, "format-date", "medication.date", options))));
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.dosage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.dose_unit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.frequency", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.no_medications", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <tr>\n      <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "seizure.assessment_date", options) : helperMissing.call(depth0, "format-date", "seizure.assessment_date", options))));
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "seizure.episode_severity", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "seizure.event_confidence", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "seizure.frequency", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n  ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <tr>\n      <td>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "surgery.date", options) : helperMissing.call(depth0, "format-date", "surgery.date", options))));
  data.buffer.push("</td>\n      <td>");
  stack1 = helpers._triageMustache.call(depth0, "surgery.surgery_type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n    </tr>\n  ");
  return buffer;
  }

  data.buffer.push("<h2>Patient Numero ");
  stack1 = helpers._triageMustache.call(depth0, "anon_number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n");
  data.buffer.push(escapeExpression((helper = helpers['badass-chart'] || (depth0 && depth0['badass-chart']),options={hash:{
    'data': ("seizureData"),
    'secondaryData': ("medicationData")
  },hashTypes:{'data': "ID",'secondaryData': "ID"},hashContexts:{'data': depth0,'secondaryData': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "badass-chart", options))));
  data.buffer.push("\n\n<h3>Medications</h3>\n\n<table class=\"table table-hover table-striped\">\n<thead>\n  <tr>\n    <th>Date</th>\n    <th>Dosage</th>\n    <th>Dose Unit</th>\n    <th>Frequency</th>\n    <th>Name</th>\n    <th>No Medications</th>\n  </tr>\n</thead>\n<tbody>\n  ");
  stack1 = helpers.each.call(depth0, "medication", "in", "medications", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</tbody>\n</table>\n\n\n<h3>Seizures</h3>\n\n<table class=\"table table-hover table-striped\">\n<thead>\n  <tr>\n    <th>Assessment Date</th>\n    <th>Severity</th>\n    <th>Event Confidence</th>\n    <th>Frequency</th>\n  </tr>\n</thead>\n<tbody>\n  ");
  stack1 = helpers.each.call(depth0, "seizure", "in", "seizures", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</tbody>\n</table>\n\n\n<h3>Surgeries</h3>\n\n<table class=\"table table-hover table-striped\">\n<thead>\n  <tr>\n    <th>Date</th>\n    <th>Type</th>\n  </tr>\n</thead>\n<tbody>\n  ");
  stack1 = helpers.each.call(depth0, "surgery", "in", "surgeries", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</tbody>\n</table>");
  return buffer;
  
});
