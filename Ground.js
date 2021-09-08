class Ground{
     constructor(){
         this.width=2000;
         this.height=20;
         var options = {
             isStatic:true
         }
        
        this.body=Bodies.rectangle(100,600,2000,20,options)
        World.add(world,this.body)
     }

     display(){
         rect(this.body.position.x,this.body.position.y,this.width,this.height)
     }

}