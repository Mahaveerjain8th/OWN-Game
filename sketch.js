var bg,bgimg;
var character,characterimg;
var score = 0;
var health = 100;
var LifeImg ,Life,Life2,Life3;
var Boss,BossImg;
var Jump,JupImg;
var VillianImg,villian,Vgroup;
var gameState = 0;


function preload(){
    bgimg = loadImage("images/bg.jpg");
    characterimg = loadAnimation("images/c1.gif","images/c2.gif","images/c3.gif","images/c4.gif","images/c5.gif");
    LifeImg = loadImage("images/LIFE.png");
    BossImg = loadAnimation("Boss/B1.png","Boss/B2.png","Boss/B3.png","Boss/B4.png","Boss/B5.png","Boss/B6.png","Boss/B7.png","Boss/B8.png","Boss/B9.png","Boss/B10.png","Boss/B11.png","Boss/B12.png","Boss/B13.png","Boss/B14.png","Boss/B15.png","Boss/B16.png","Boss/B17.png")
    JumpImg = loadAnimation("hERO JUMPING/j1.png","hERO JUMPING/j2.png","hERO JUMPING/j3.png","hERO JUMPING/j4.png","hERO JUMPING/j5.png","hERO JUMPING/j6.png","hERO JUMPING/j7.png","hERO JUMPING/j8.png","hERO JUMPING/j9.png","hERO JUMPING/j10.png","hERO JUMPING/j11.png","hERO JUMPING/j12.png","hERO JUMPING/j13.png","hERO JUMPING/j14.png","hERO JUMPING/j15.png","hERO JUMPING/j16.png","hERO JUMPING/j17.png");
    ShootImg = loadAnimation("images/shoot.png");
    VillianImg = loadAnimation("images/VILLIAN.png");
    fireimg = loadAnimation("images/FIRE.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    bg = createSprite(width/2,height/2-100);
    bg.addImage(bgimg);
    bg.scale = 4;
    bg.velocityX = -3

    ground = createSprite(300,height-60,600,20);
    ground.visible = false;

    character = createSprite(100,height-400);
    character.addAnimation("ch",characterimg);
    character.addAnimation("ch1",JumpImg);
    character.addAnimation("ch2",ShootImg);
    character.scale = 2;


    Life = createSprite(220,height/2-80);
    Life.addImage(LifeImg);
    Life.scale = 0.1;
    
    Life2 = createSprite(270,height/2-80);
    Life2.addImage(LifeImg);
    Life2.scale = 0.1;

    Life3 = createSprite(320,height/2-80);
    Life3.addImage(LifeImg);
    Life3.scale = 0.1;
    V1group = new Group();
    Vgroup = new Group()
    character.debug=true
    lives=[Life,Life2,Life3]
}

function draw(){
    background(0);

    if(gameState === 0){
    drawSprites();
    textSize(30);
    fill("white")
    text("Score: "+score,width-150,100)
    text("Health: ",100,height/2-75)
    if(bg.x<0){
        bg.x = width/2
    }
    spawnVillian();
    character.velocityY = character.velocityY+ 0.5
    character.collide(ground);

    if(keyWentDown("space")){
        character.x = 200
        character.changeAnimation("ch2",ShootImg)
        character.scale = 2;
        
    }
    if(keyWentUp("space")){
        character.changeAnimation("ch",characterimg);
        character.scale = 2;
    }
    if(V1group.isTouching(character) && keyWentDown("space")  ){
    V1group[0].destroy();

    score=score+25;


    }
    
        for(var i=0; i < lives.length; i ++){
            if(V1group.isTouching(character) && keyDown("space")  ){

        lives[i].destroy();
        }
  
 

    }
   


    }

}
function spawnVillian(){
    if(frameCount%200===0){
    villian = createSprite(width,height-170);
    villian.addAnimation("vi",VillianImg);
    villian.velocityX = -5
    villian.scale = 0.4
    villian.lifetime = 200;
    V1group.add(villian);
  
    
    }
    
}