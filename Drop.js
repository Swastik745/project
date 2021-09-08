class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1  
                 
        }
        this.rain = Bodies.circle(x,y,20,options)
       this.image = loadImage("flower.jpg")
        this.radius = 50;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){

           Matter.Body.setPosition(this.rain, {x:random(0,1700), y:random(0,1500)})
        }
    }

    showDrop(){
        //image (this.image,20,20)
        //fill(228,7,168)
        imageMode(CENTER);
        image(this.image,this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}