// How to learn a library

// .update() is the default for any selection
//

var gameOptions = {
  width: 500,
  height: 500,
  radius: 10
}

var svg = d3.select('.container').append('svg')
  .attr('class','mainSim')
  .attr('width', gameOptions.width)
  .attr('height', gameOptions.height)
  .append('g');

var axes = {
  x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
  y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height]),
};


var update = function(particleData){

  var particles = svg.selectAll('circle.particle').data(particleData);


  // the general update pattern is
  // particles.enter().append()
  // this appends all of the nodes that are
  // not attached to the dom
  particles.enter()
    .append('svg:circle')
    .attr('class', 'particle')
    .attr('r', 10)
    .attr('cx', function(d) { return d.getX(); })
    .attr('cy', function(d) { return d.getY(); })
    .attr('fill', 'black');


  // why do we update the cx,cy twice?
  // lines 23 & 24 only get called the
  // first time
  // in addition, the lines a & b are part
  // of the transition. they need to transition
  // from one place to another
   // we might want to use
  // return axes.x(enemy.x) to translate the coordinate
  // system

  particles
    .transition()
    .duration(1000)
    .style("opacity", 1)
    .attr("cx", function(d){ return d.getX();})  // line a
    .attr("cy", function(d){ return d.getY();})  // line b


   particles.exit()
     .remove();


};

var randomParticles = function(enemyCount){
  var particleCount = particleCount || 20;
  var particleData = [];
  for( var i = 0; i < particleCount; i++ ){

    var options = {
      radius: gameOptions.radius,
      width: gameOptions.width,
      height: gameOptions.height,
      x: Math.random() * gameOptions.width,
      y: Math.random() * gameOptions.height,
      vx: Math.random() * 10,
      vy: Math.random() * 10
    };
    particleData.push(new Particle(options));
  }
  return particleData;
}

// initial display
update(randomParticles());

setInterval( function(){
  update(randomParticles());}, 1000);


