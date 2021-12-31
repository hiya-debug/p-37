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
    //write code here to hide question elements


    //write code to change the background color here
    background = "red"

    //write code to show a heading for showing the result of Quiz
    if(allConestants !== undefined) {
      fill("black")
      textSize(30)
      texts("RESULT OF QUIZ",130,230)
    }
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
   

    //write code to add a note here
    if(allConestants !== undefined){
      fill("blue")
      textSize(20)
      texts("*NOTE: contestants who answered correct are in the color green!*",130,230)
    }
    //write code to highlight contest who answered correctly
    for(var plr in allConestants){
      var correctAns = "2";
      if(correctAns === allConstants[plr].answer)
      fill("green")
    else
      fill("red")
    }

  }

}
