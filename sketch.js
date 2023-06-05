//namespacing
const Engine = Matter.Engine; //mecânica física
const World = Matter.World; //mundo físico
const Bodies = Matter.Bodies; // corpos físicos
const Body = Matter.Body; //corpo físico

var engine, world;

var chao;

function setup() {
  createCanvas(400, 600);

  engine = Engine.create();
  world = engine.world;

  var chao_options = {
    isStatic: true,
  };

  chao = Bodies.rectangle(200, 580, 400, 40, chao_options);
  World.add(world, chao);

  console.log(chao);
}

function draw() {
  background("black");

  Engine.update(engine);

  strokeWeight(3);
  stroke("green");
  fill("lightgreen");

  rectMode(CENTER);
  rect(chao.position.x, chao.position.y, 400, 40);
}
