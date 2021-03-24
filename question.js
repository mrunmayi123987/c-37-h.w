class Question {
    constructor() {
      
 
  this.title = createElement('h2');
  this.question = createElement('h2');
  this.option1 = createElement('h2');
  this.option2 = createElement('h2');
  this.input1=createInput("enter your name");
this.button = createButton('Submit');

this.input2 = createInput("enter correct option no.");



  
    }
  
    hide(){
   
  
    }
  
    display(){
      //var title = createElement('h2')
     this.title.html("My Quiz Game");
      this.title.position(350, 0);

      this.question.html("Question:- What starts with 'e' and ends with 'e' but has only one letter?")
      this.question.position(150,80);
      this.option1.html("1: Everyone");
      this.option1.position(150,150);
      this.option2.html("2: envelope");
      this.option2.position(150,200);

      this.button.position(400,300);
    this.input1.position(150,300);
    this.input2.position(600,300);
      
      
      
  
        contestant.name = this.input1.value();
        contestant.name = this.input2.value();
     
      };
  
    }
  
  