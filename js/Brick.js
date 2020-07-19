class Brick{
	constructor(location,width,height,color,points){
			this.location = location
			this.width = width
			this.height = height
			this.color = color
			this.points = 1
	}

	show(){
		fill(this.color);
		stroke(0);
		strokeWeight(3);
		rect(this.location.x,this.location.y,this.width,this.height);
	}

	IsColliding(ball){
		if(ball.location.x + ball.r >= this.location.x &&
			ball.location.y + ball.r >= this.location.y &&
			ball.location.x - ball.r <= this.location.x + this.width &&
			ball.location.y - ball.r <= this.location.y + this.height){
				return true;
		}
	}
	
}