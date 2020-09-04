class Paper{
constructor(x,y,r){
  var options={
      isStatic : false,
      restitution:0.3,
      friction:0.5,
      density:1.2

  }
  this.x=x;
  this.y=y;
  this.r=r;
  this.body=Bodies.circle(x,y,r/2,options);
  World.add(world,this.body);
}
display(){
    var paper = this.body.position;
    push();
    translate(paper.x,paper.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(250,200,100);
    ellipse(0,0,this.r,this.r);
    pop();
}

}