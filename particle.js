var Particle = function(options){

  this.vx = options.vx;
  this.vy = options.vy;
  this.worldWidth = options.width;
  this.worldHeight = options.width;
  this.radius = options.radius;
  this.minX = options.radius;
  this.maxX = options.width - options.radius;
  this.minY = options.radius;
  this.maxY = options.height - options.radius;

  var startX = options.x >= this.minX ? options.x : this.minX;
  startX = startX <= this.maxX ? startX : this.maxX;
  var startY = options.y >= this.minY ? options.y : this.minY;
  startY = startY <= this.maxY ? startY : this.maxY;

  this.x = startX;
  this.y = startY;
};

Particle.prototype.getX = function(){
  return this.x;
};

Particle.prototype.setX = function(x){
  x = x >= this.minX ? x : this.minX;
  x = x <= this.maxX ? x : this.maxX;
  this.x = x;
};

Particle.prototype.getY = function(){
  return this.y;
};

Particle.prototype.setY = function(y){
  y = y >= this.minY ? y : this.minY;
  y = y <= this.maxY ? y : this.maxY;
  this.y = y;
};

Particle.prototype.getVx = function(){
  return this.vx;
};

Particle.prototype.setVx = function(vx){
  this.vx = vx;
};

Particle.prototype.getVy = function(){
  return this.vy;
};

Particle.prototype.setVy = function(vy){
  this.vy = vy;
};
