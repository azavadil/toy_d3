var w = 960; //canvas width
var h = 700; //canvas height
var r = Math.min(w, h) / 1.8; //radius of the circle my arc will follow
var s = .09; //arc spacing 

var arc = d3.svg.arc()
  .startAngle(0)
  .endAngle(function(d) { return d.value * 2 * Math.PI; })
  .innerRadius(function(d) { return r; })
  .outerRadius(function(d) { return (d.index + s) * r; }); 
  
  
var vis = d3.select("#chart").append("svg")
  .attr("width",w)
  .attr("height",h)
    .append("g")
  .attr("transform", "translate(" + w/2 + "," + h/2 + ")");
  
var g; 

g = vis.selectAll("g")
      .data(buildPercBars)
        .enter().append("g")
      .attr("class", "arc"); 

g.append("path")
    .style("fill", "93cfeb")
    .attr("d",arc)
    
function buildPercBars() { 
  return [ { value: 0.45, index: 0.5},]; 
}

window.addEventListener("keypress", selectArcs, false); 

function selectArcs() { 
  d3.selectAll("g.arc > path")
    .each(arcTween); 
} 

function arcTween(){ 
  d3.select(this)
    .transition().duration(1000)
    .attrTween("d", tweenArc({value : 0})); 
}

function tweenArc(b){ 
  return function(a) { 
    var i = d3.interpolate(a,b); 
    for( var key in b) a[key] = b[key]; 
    return function(t) { 
      return arc(i(t)); 
    }
  } 
}

