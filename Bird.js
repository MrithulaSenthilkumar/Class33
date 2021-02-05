class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.bird1 = loadImage("sprites/bird.png");
    this.bird2 = loadImage("sprites/bird.png");
    this.bird3 = loadImage("sprites/bird.png");


    this.smokeImage = loadImage("sprites/smoke.png");
    this.Visiblity = 255;

    this.trajectory = []
  }

  displayBird1(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.bird1 ,0,0,this.width,this.height);
    pop()
  }

  displayBird2(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.bird2 ,0,0,this.width,this.height);
    pop()
  }

  displayBird3(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.bird3 ,0,0,this.width,this.height);
    pop()
  }

  displaytrajectory() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

   
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var birdposition=[this.body.position.x,this.body.position.y]
      this.trajectory.push(birdposition)
    }

    for(var i =0;i<this.trajectory.length;i++){
      push();
      tint(255,this.Visiblity);
      this.Visiblity=this.Visiblity-0.4;
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
      pop();
    }

  }
}
