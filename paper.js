class Paper{
    constructor(x,y,width,height){

        var Paper_options ={
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
       
       this.body=Bodies.circle(x,y,50,Paper_options) 
       World.add (world,this.body)
       this.width-width
       this.height=height
    }
    display(){
        var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    angleMode(RADIANS)
    rotate(angle)
    fill("purple")
    strokeWeight(4);
    stroke("green")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}
