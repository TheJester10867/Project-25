const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bin1, bin2, bin3;
var paper;
var endPoint1, endPoint2, endPoint3;
var b, bImg;

function preload(){
	bImg = loadImage("dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 495, 1000, 10);
	b = createSprite(840, 420, 100, 111);
	b.addImage(bImg);
	b.scale = 0.43;
	b1 = new Bin(840, 489, 90, 1);
	b2 = new Bin(790, 425, 1, 130);
	b3 = new Bin(890, 425, 1, 130);
	paper = new Paper(100, 460, 70, PI/2);
	endPoint1 = new Ground(995, 250, 10, 500);
	endPoint2 = new Ground(5, 250, 10, 500);
	endPoint3 = new Ground(500, 5, 1000, 10);

	Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background(255);

	ground.display();
	b1.display();
	b2.display();
	b3.display();
	paper.display();
	endPoint1.display();
	endPoint2.display();
	endPoint3.display();
  
    drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 105, y : -110});
	} 
}