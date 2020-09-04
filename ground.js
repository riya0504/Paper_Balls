class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.ground=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.ground);
    }
    display(){
        var ground = this.ground.position;
        push();
        translate(ground.x,ground.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(250,250,250);
        rect(0,0,this.w,this.h);
        pop();
    }
}