import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings : ['width', 'height'],

  width  : 1000,
  height : 400,

  draw: function() {
    if (Ember.isEmpty(this.get('data')))
      return;
  
    var data = this.get('data');
    var secondaryData = this.get('secondaryData');

    var margin = {top: 20, right: 80, bottom: 30, left: 80},
      width = this.get('width') - margin.left - margin.right,
      height = this.get('height') - margin.top - margin.bottom;

    this.set('width', width);
    this.set('height', height);

    var svg = d3.select("#" + this.get('elementId') + " svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .attr('viewBox',"0 0 " + this.get('width') + " " + this.get('height'))
      .attr('preserveAspectRatio','xMinYMin');

    this.generateGraph(svg, data);

    var sortedMeds = {};

    secondaryData.forEach(function(datum) {
      var currName = datum.name;
      if (Ember.isEmpty(sortedMeds[currName])) {
        sortedMeds[currName] = [];
        sortedMeds[currName]['meta'] = secondaryData.meta;
        sortedMeds[currName].push(datum);
      } else {
        sortedMeds[currName].push(datum);
      }
    }.bind(this));

    for (var medData in sortedMeds) {
        if (sortedMeds.hasOwnProperty(medData)) {
          console.log(medData);
          this.generateGraph(svg, sortedMeds[medData]);
        }
    }
  },

  generateGraph: function(svg, data) {
    var dom   = data.meta.domain,
        val   = data.meta.value,
        level = data.meta.level,
        type  = data.meta.type,
        title = data.meta.title;

    var width = this.get('width'),
        height = this.get('height');

    var tooltip =
      d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html( function(d) {
        var info = "<dl class=\"dl-horizontal\">";
        var tooltip = d.tooltip;

        for (var k in tooltip) {
          if (tooltip.hasOwnProperty(k)) {
            info += "<dt>" + k + "</dt><dd>" + tooltip[k] + "</dd>";
          }
        }

        info += "</dl>";
        return info;
      });

    svg.call(tooltip);

    var x = d3.time
      .scale()
      .range([0, this.get('width')])
      .domain([d3.min(data, function(d) { return d[dom]; } ), d3.max(data, function(d) { return d[dom]; })]);

    var y = d3.scale.linear()
      .range([height, 0])
      .domain([0, d3.max(data, function(d) { return d[val] } )]);

    if (level == 'primary') {
      var xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');
      
      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
    }

    if (level == 'primary') {
      var orientation    = 'left',
          axisShift      = 6,
          transformation = "translate(-30, 0)";
    } else {
      var orientation    = 'right',
          axisShift      = 24,
          transformation = "translate(" + this.get('width') + ", 0)";
    }

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient(orientation);

    svg.append("g")
      .attr("class", "y axis")
      .attr("transform", transformation)
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", axisShift)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(title);

    if (type == 'bar') {
      var bars = svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d[dom]); })
        .attr("width", width / data.length - 8)
        .attr("y", function(d) { return y(d[val]); })
        .attr("height", function(d) { return height - y(d[val]); });

      if (tooltip) {
        bars
        .on('mouseover', tooltip.show)
        .on('mouseout', tooltip.hide);
      }

    } else if (type == 'line') {

      var line = d3.svg.line()
        .x(function(d) { window.thing = x; console.log(d[dom]); return x(d[dom]); })
        .y(function(d) { console.log(d[val]); return y(d[val]); })
        .interpolate('linear');

      var lines = svg.append('g')
        .append('path')
        .attr('class', 'line')
        .attr('stroke-width', 2)
        .attr('d', line(data));
    
    } else if (type == 'dots') {
      var dots = svg
      .append('g')
      .attr('class', 'dots')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g');

      dots
      .append('circle')
      .attr('r', 4)
      .attr('cx', function(d) { return x(d[dom]); })
      .attr('cy', function(d) { return y(d[val]); });
      
      if (tooltip) { 
        dots
        .on('mouseover', tooltip.show)
        .on('mouseout', tooltip.hide);
      }
    }

  },

  didInsertElement: function() {
    this.draw();
  },

  dataChanged: function() {
    if (this._state == "inDOM")
      this.draw(); 
  }.observes('data.[],secondaryData.[]')

});