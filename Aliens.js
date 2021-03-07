class Aliens{
  constructor(x, y, r) {
      var options = {
      // isStatic:true,
          'restitution':0.1,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      var rand = Math.round(random(1,5));
      switch(rand){
        case 1:this.image = loadImage("images/a1.png");break;
        case 2:this.image = loadImage("images/a2.png");break;
        case 3:this.image = loadImage("images/a3.jpg");break;
        case 4:this.image = loadImage("images/a4.png");break;
        case 5:this.image = loadImage("images/a5.webp");break;
        default: break;

      }
      //Matter.Body.setVelocity(this.body,{x:50,y:20}) 

      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
}
