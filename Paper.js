class Paper{
    constructor(x, y, radius, angle){
        var options = {
            density : 1.2,
            restitution : 1,
            friction : 0.5,
            isStatic : false
        }
        this.body = Bodies.circle(x, y, (radius-22)/2, options);
        this.radius = radius;
        this.image = loadImage("paperball.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}