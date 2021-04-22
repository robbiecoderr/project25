class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false, restitution:1			
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);
this.image=loadImage("paper.png")
	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,50,50);
			pop()
			
	}

}