class Bin{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.bin=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.bin);
    }
    display(){
        var bin = this.bin.position;
        push();
        translate(bin.x,bin.y);
        rectMode(CENTER);
        fill(0,250,250);
        rect(0,0,this.w,this.h);
        pop();
    }
}