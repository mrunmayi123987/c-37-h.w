class Contestant {
    constructor(){
  
  this.index = null;
  this.distance=0;
  this.name=null;
  
  
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
   // update(name){
      //var playerIndex = "player" + playerCount;
      //database.ref(playerIndex).set({
       // name:name
      //});
    //}
  
    update (){
   var contestantIndex= "contestant/contestant"+this.index;
   database.ref(contestantIndex).set({
  name:this.name,
  distance:this.distance
  
  
   });
  
    }
  
   static getPlayerInfo(){
   var contestantInforef=database.ref('players');
   contestantInforef.on("value", (data)=>{
  
  allcontestant= data.val();
  
   });
  
  
    }
  }
  