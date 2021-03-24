class Drop {
   connstructor(x,y,width,height,angle) {
       options = {
          restitution:0.8,
          friction:1.0,
          density:0.04
       }
       this.body = Bodies.rectangle(x,y,width,height,options)
       this.width = width
       this.height = height
       World.add(world,this.body)
     }
   display(){
       var angle = this.body.angle
       //only a variable
       var pos = this.body.position
       push()
       //update the x and y position
       translate(pos.x,pos.y)
       //change the position and rotate to an angle
       rotate(angle)
       ellipse(0,0,this.width,this.height)
       pop();
   }
 }
   
