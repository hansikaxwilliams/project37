class Quiz {
  constructor(){}

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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    quiz.hide();
     textSize(30); 
     text("Game Start", 120, 100)
      Player.getPlayerInfo(); 

    //write code here to hide question elements
    input.hide();
    button.hide();
    title.hide();
    //write code to change the background color here
if(gameState===END){
  bg("yellow")
}
    //write code to show a heading for showing the result of Quiz
if(gameState===END){
  this.title.html("RESULT OF THE GAME");
}
    //call getContestantInfo( ) here
getContestantInfo();
    //write condition to check if contestantInfor is not undefined
    if(allPlayers !== undefined){ 
      var display_position = 130; 
      for(var plr in allPlayers){ 
        if (plr === "player" + player.index){
      fill("red") 
        }
      }
    //write code to add a note here
if(allContestants!==undefined){
  fill("blue");
  textSize("20");
  text("*NOTE:The contestant who answered the question correctly is highlighted in green color!",130,230)
}
    //write code to highlight contest who answered correctly
    for (var plr in allContestants){
      var correctAns="2";
      if(correctAns===allContestants[plr].answer){
        fill("green");
      }
      else{
        fill("red");
      }
    }
  }

}
}
