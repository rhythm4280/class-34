class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            lenght:400
        }
        this.pointB=pointB
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        push();
        strokeWeight(4)
        stroke("red")
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
        pop();
    }
}