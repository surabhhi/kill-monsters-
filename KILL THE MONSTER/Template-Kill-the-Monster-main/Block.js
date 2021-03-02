class Block{
    constructor(x,y,weigth,height,options){
        var options = {
            restitution:0.3,
            friction:1.1,
            density:20
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        world.add(world,this.body);
    }
    display(){
var pos = this.body.position;
var angle = this.body.angle;

 push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(4);
stroke("black");
fill("purple");
 rect ( 0,0 ,this.width,this.height);
pop();

    }
}