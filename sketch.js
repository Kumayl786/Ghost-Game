var ghost, ghostimage
var door, doorimage, doorgroup
var tower, towerimage
var climber, climberimage, climbergroup
var invisibleblock, invisibleblockgroup
var gamestate = "play"



function preload(){
  ghostimage = loadImage("ghost-jumping.png")
  towerimage = loadImage("tower.png")
  doorimage = loadImage("door.png")
  climberimage = loadImage("climber.png")
  
  

}



function setup(){
  createCanvas(600,600)
  tower = createSprite(300,300)
  tower.addImage(towerimage)
  tower.velocityY = 1
  
  ghost = createSprite(200,200,50,50)
  ghost.addImage(ghostimage)
  ghost.scale = 0.3

  doorgroup = new Group()
  invisibleblockgroup = new Group()
  climbergroup = new Group()
}


function draw(){
  background("black")
  
  if(gamestate === "play"){
  if(tower.y>400){
    tower.y = 300
    
    
  }
       
    
    if(keyDown("space")){
      ghost.velocityY = -10
      ghost.velocityX = 0  
    }
    if(keyDown("left_Arrow")){
      ghost.x = ghost.x -4    
    }
    if(keyDown("right_Arrow")){
      ghost.x = ghost.x +9
      
    }
    ghost.velocityY = ghost.velocityY +0.3
    if(climbergroup.isTouching(ghost)){    
      ghost.velocityY = 0
    }
    if(invisibleblockgroup.isTouching(ghost)||ghost.y>600){
     ghost.destroy()
      gamestate = "end"
    }
    doors()
    drawSprites()
  }                  
  
  if(gamestate === "end"){
    
    fill("red")
    textSize(45)
    text("Game Over", 200,250)
    
    
    
  }
  
}


function doors(){
  if(frameCount %200 === 0){
  door = createSprite(200,-50)
  climber = createSprite(200,10)
    invisibleblock = createSprite(200,15)
  door.addImage(doorimage)
    climber.addImage(climberimage)
    door.velocityY = 1
    climber.velocityY = 1
    invisibleblock.velocityY = 1
    invisibleblock.width = climber.width
    invisibleblock.height =  2
    door.x = Math.round(random(100,400))
    climber.x = door.x
    invisibleblock.x = door.x
    ghost.depth = door.depth +1
    doorgroup.add(door)
    invisibleblockgroup.add(invisibleblock)
    climbergroup.add(climber)
    invisibleblock.debug = true
    climber.lifetime = 700
    door.lifetime = 700
    invisibleblock.lifetime = 700
  
  }
  
  
  
  
}


