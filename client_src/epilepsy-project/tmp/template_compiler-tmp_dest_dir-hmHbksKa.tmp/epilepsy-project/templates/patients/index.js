import Ember from 'ember';
export default Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <table class=\"table\">\n  <thead>\n    <tr>\n      <th>Date</th>\n      <th>Dosage</th>\n      <th>Dose Unit</th>\n      <th>Frequency</th>\n      <th>Name</th>\n      <th>No Medications</th>\n    </tr>\n  </thead>\n  <tbody>\n    ");
  stack1 = helpers.each.call(depth0, "medication", "in", "medications", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n  </table>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <tr>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.dosage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.dose_unit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.frequency", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "medication.no_medications", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      </tr>\n    ");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});
