class boxy{
    constructor(x,y,width,height){
        var options ={
            restitution: 0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        World.add(world,this.body);
    }
    display(){
        var a=this.body.position 
        var angle=this.body.angle
        push ()
        translate (a.x,a.y);
        rotate (angle);
        rectMode(CENTER);
        fill ('cyan')
        rect(0,0,this.width,this.height);
pop()
    }
}