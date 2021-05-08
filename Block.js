class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :1,
      }
      this.visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    score(){
      if(this.visibility<0 && this.visibility>-100){
      score=score+2
      }
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed<5){
        
        
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
    else{
      World.remove(world,this.body)
      this.visibility=this.visibility-3
    }
  }
}