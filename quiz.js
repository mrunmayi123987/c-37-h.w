class Quiz {
    constructor(){
  
  
  
    }
  
  
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        contestant = new Contestant();
        contestant.getCount();
        question= new Question()
        question.display();
      }
    }
  
    play(){
   question.hide();
   text("game start",120,100);
   contestant.getcontestantInfo();
  
   if(allcontestant !== undefined){
  var display_position=130;
  for(var cons in allcontestant){
  
  if(cons=== "contestant"+contestant.index){
  fill("red");
  
  }
  else{
  fill("black");
  
  
  }
  
  //display_position=display_position+20;
  //textSize(20);
  //text(allcontestant[cons].name+":"+allcontestant[cons].distance,120,display_position);
  
  
  }
   }
  
    }
  }
  