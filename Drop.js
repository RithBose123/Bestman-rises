class Drop{
    constructor(x,y,r){
        this.x=x
        this.y=y
        this.r=15
        var options={
            isStatic:false,
            friction:0.1
        }
        this.drop= Bodies.circle(x,y,10,options)
        World.add(world,this.drop)
    }
    display(){
        var pos=(this.drop.position)
        push()
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        fill("blue")
        ellipse(0,0,this.r,this.r)
        pop()
    }
    update(){
        if(this.drop.position.y> height){
           Matter.Body.setPosition(this.drop,{x:random(0,400)},{y:random(0,400)})
        }
           
    }
}