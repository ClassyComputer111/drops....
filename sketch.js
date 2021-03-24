const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;

function preload(){
    
}

function setup(){
    createCanvas(500,800)

    drop = new Drop(50,100,10,50)

    engine = Engine.create();
    world = engine.world;

    var maxDrops = 100;
    for(var i = 0;i<maxDrops; i++){
        maxDrops(new Drop(random(0,400),random(0,400)))
    }


    
}

function draw(){
    drop.display() 
}   

