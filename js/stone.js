class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(x,y,radius/2,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var poss = this.body.position
        push()
		translate(poss.x, poss.y);
	    // rectMode(CENTER);
		//rotate(this.body.angle)
		fill("brown");
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius, this.radius)
		pop()
    }
}