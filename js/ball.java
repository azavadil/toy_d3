public class Ball
{
  private double rx, ry; 
  private double vx, vy; 
  private final double radius; 
  public Ball(){ 
    //init pos and velocity
  } 
  
  public void move(double dt)
  { 
    if(( rx + vx*dt < radius ) || (rx + vx*dt > 1.0 - radius)) { vx = -vx;}
    if (( ry + vy*dt < radius ) || (ry + vy*dt > 1.0 - radius)) { vx = -vy;} 
    rx = rx + vx*dt; 
    ry = ry + vy*dt; 
  } 
  
  public void draw()
  { 
    StdDraw.filledCircle(rx,ry,radius); 
  } 
} 

/*
Event driven simulation
only change things 
maintain PQ of collision events prioritized by time
2 phases. prediction and collisions
