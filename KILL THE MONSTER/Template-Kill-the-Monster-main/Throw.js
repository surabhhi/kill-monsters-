class Throw{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointb:pointB,
            stiffness:0.2,
            length:10
        }
        this.pointB=pointB
        this.throw = constraint.create(options);
        this.height=height;
        world.add(world,this.throw);
    }
    fly(){
        this.throw.bodyA=null;
              
    }
    display(){
        
    }

}