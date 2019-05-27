window.onload = loadApp;


var mathQuestionElement = null;
var mathAnswer = null;
var paragraphContent = null;
var userAnswerTextbox = null;
var currentQuestionItem = null;
var upToQuestion = 0;
var currentDraggingObject = null;
var numberOfCorrectNumbers = 0;
var mCQuestionDiv = null;
var mCOptionsDiv = null;
var buttonElement = null;
var randomNumber = 0;



/*
  This function will be called when the page loads.
  It will display the home page.
*/
function loadApp() {
  console.log("loadApp");
  displayHomePage();
}


/*
  This function displays the home page.
  This function will be called when the "loadApp" function is called.
*/
function displayHomePage() {
  //clear the document
  document.body.innerHTML = "";

  var titleDiv = createDiv();
  titleDiv.id = "titleDiv";

  var title = createHeadings("Fun with Math");
  title.id = "title";
  titleDiv.appendChild(title);

  var barnImage = createImage("images/barn.png");
  barnImage.id = "barnHome";

  var startButton = createButton("Start");
  startButton.id = "startButton";
  startButton.onclick = chooseLevel;

  var pigImage = createImage("images/pig2.png");
  pigImage.id = "pigHome";
}

/*
  This function displays the page where users can choose a level.
  This will be called when the "Start" button on the home page is clicked and when the "Back to Home Page" button on the end of level page is clicked.
*/
function chooseLevel() {
  document.body.innerHTML = "";

  var farmerLevel = createImage("images/farmer.png");
  farmerLevel.id = "farmerID"

  var messageText = createParagraph("Help me build my very own farm by completing different challenges. You will get a farm item every time you complete a challenge. Choose a level now.", "farmerMessage");
  var messageDiv = createDiv();
  messageDiv.id ="farmerMessageDiv";
  messageDiv.appendChild(messageText);

  var buttonLevel = createDiv();
  buttonLevel.id = "buttonLevel";

  var easyLevelButton = createButton("Easy");
  easyLevelButton.classList.add("levelButton");
  easyLevelButton.onclick = createEasyQAGame;
  buttonLevel.appendChild(easyLevelButton);

  var mediumLevelButton = createButton("Medium");
  mediumLevelButton.classList.add("levelButton");
  mediumLevelButton.onclick = createMediumQAGame;
  buttonLevel.appendChild(mediumLevelButton);

  var hardLevelButton = createButton("Hard");
  hardLevelButton.classList.add("levelButton");
  hardLevelButton.onclick = createHardQAGame;
  buttonLevel.appendChild(hardLevelButton);

  //container div for the levels' descriptions
  var containerDiv = createDiv();
  containerDiv.id = "descDivContainer";

  var easyText = createParagraph("Basic mathematical operations using one digit.", "levelDesc");
  var easyDescDiv = createDiv();
  easyDescDiv.classList.add("descDiv");
  easyDescDiv.appendChild(easyText);
  containerDiv.appendChild(easyDescDiv);

  var mediumText = createParagraph("Basic mathematical operations using one to two digits.", "levelDesc");
  var medDescDiv = createDiv();
  medDescDiv.classList.add("descDiv");
  medDescDiv.appendChild(mediumText);
  containerDiv.appendChild(medDescDiv);

  var hardText = createParagraph("Basic mathematical operations using two to three digits.", "levelDesc");
  var hardDescDiv = createDiv();
  hardDescDiv.classList.add("descDiv");
  hardDescDiv.appendChild(hardText);
  containerDiv.appendChild(hardDescDiv);
}

/*
  This function will be called whenever a mini game, except the last, is won.
  This function will display the prize of the user and a congratulatory message.
*/
function createTransition(message, prizeImage, nextChallenge){
  document.body.innerHTML = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.id = "pig2";
  //create prize Image
  var prizeImage = createImage(prizeImage);
  prizeImage.classList.add("prize");
  //create pig's message
  var messageText = createParagraph(message, "transitionText");
  var messageDiv = createDiv();
  messageDiv.classList.add("messageDiv");
  messageDiv.appendChild(messageText);

  var nextChallengeButton = createButton("Next Challenge");
  nextChallengeButton.classList.add("nextChallenge");
  nextChallengeButton.onclick = nextChallenge;

  var containerDiv = createDiv();
  containerDiv.appendChild(messageDiv);
  containerDiv.appendChild(pigImage);
  containerDiv.classList.add("transitionContainerDiv");

}


/*
  This displays the last mini-game's prize and a congratulatory message.
  This also lets users to see the farm with the prizes that he/she got.
  Furthermore, it also let the user continue to the next level or go back to the page where the levels are displayed.
  This function will be called whenever a level ends, which is after the last mini-game.
*/
function endOfLevelPage(message, prizeImage, seeFarm, nextLevel){
  document.body.innerHTML = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.id = "pig2";

  //create prize Image
  var prizeImage = createImage(prizeImage);
  prizeImage.classList.add("prize");

  //create farmer's message
  var messageText = createParagraph(message, "transitionText");

  var messageDiv = createDiv();
  messageDiv.classList.add("messageDiv");
  messageDiv.appendChild(messageText);

  var buttonDiv = createDiv();
  buttonDiv.id = "buttonDiv";

  var homePageButton = createButton("Home Page");
  homePageButton.id = "homePage";
  homePageButton.onclick = chooseLevel;
  buttonDiv.appendChild(homePageButton);

  var seeFarmButton = createButton("See Farm");
  seeFarmButton.classList.add("seeFarm");
  seeFarmButton.onclick = seeFarm;
  buttonDiv.appendChild(seeFarmButton);

  var nextLevelButton = createButton("Next Level");
  nextLevelButton.classList.add("nextLevel");
  nextLevelButton.onclick = nextLevel;
  buttonDiv.appendChild(nextLevelButton);

  var containerDiv = createDiv();
  containerDiv.appendChild(messageDiv);
  containerDiv.appendChild(pigImage);
  containerDiv.classList.add("transitionContainerDiv");
}

/*
  This displays the last mini-game prize's and a congratulatory message.
  This also lets users to see the farm with the prizes that he/she got and go back to the page where the levels are displayed.
  This function will be called after the hard level is finished.
*/
function endOfGamePage(message, prizeImage, seeFarm){
  document.body.innerHTML = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.id = "pig2";

  //create prize Image
  var prizeImage = createImage(prizeImage);
  prizeImage.classList.add("prize");

  //create farmer's message
  var messageText = createParagraph(message, "transitionText");

  var messageDiv = createDiv();
  messageDiv.classList.add("messageDiv");
  messageDiv.appendChild(messageText);

  var buttonDiv = createDiv();
  buttonDiv.id = "buttonEndDiv";

  var homePageButton = createButton("Home Page");
  homePageButton.id = "homePage";
  homePageButton.onclick = chooseLevel;
  buttonDiv.appendChild(homePageButton);

  var seeFarmButton = createButton("See Farm");
  seeFarmButton.classList.add("seeFarm");
  seeFarmButton.onclick = seeFarm;
  buttonDiv.appendChild(seeFarmButton);

  var containerDiv = createDiv();
  containerDiv.appendChild(messageDiv);
  containerDiv.appendChild(pigImage);
  containerDiv.classList.add("transitionContainerDiv");
}

/*
   This function will display the prizes won after the easy level is completed.
   This function will be called when the "See Farm" button is clicked after the completion of the easy level.
*/
function seeFarmEasy(){
  //clear the document and set the background image
  document.body.innerHTML = "";

  //create an animated sun
  var sun = createDiv();
  sun.id = "sun";

  var sunRays = createDiv();
  sunRays.id = "rings";
  sun.appendChild(sunRays);

  var sunRay1 = createDiv();
  sunRay1.classList.add("sunRay");
  sunRays.appendChild(sunRay1);

  var sunRay2 = createDiv();
  sunRay2.classList.add("sunRay");
  sunRays.appendChild(sunRay2);

  var sunRay3 = createDiv();
  sunRay3.classList.add("sunRay");
  sunRays.appendChild(sunRay3);

  //create the images in the farm
  var farmerImage = createImage("images/farmer.png");
  farmerImage.id = "farmerPrize";

  var barnImage = createImage("images/barn.png");
  barnImage.id = "barnPrize";

  var chickenImage = createImage("images/chicken.png");
  chickenImage.id = "chickenPrize";

  var goatImage = createImage("images/goat.png");
  goatImage.id = "goatPrize";

  var cowImage = createImage("images/cow.png");
  cowImage.id = "cowPrize";

  var tree = createImage("images/tree.png");
  tree.id = "treeE";

  //create button to go back to the page where game levels are shown
  var backToHomeButton = createButton("Back to Home Page");
  backToHomeButton.id = "backHomePrizeButton";
  backToHomeButton.onclick = chooseLevel;
}

/*
   This function will display the prizes won after the medium level is completed.
   This function will be called when the "See Farm" button is clicked after the completion of the medium level.
*/
function seeFarmMedium(){
  //clear the document and set the background image
  document.body.innerHTML = "";

  var sun = createDiv();
  sun.id = "sun";

  var sunRays = createDiv();
  sunRays.id = "rings";
  sun.appendChild(sunRays);

  var sunRay1 = createDiv();
  sunRay1.classList.add("sunRay");
  sunRays.appendChild(sunRay1);

  var sunRay2 = createDiv();
  sunRay2.classList.add("sunRay");
  sunRays.appendChild(sunRay2);

  var sunRay3 = createDiv();
  sunRay3.classList.add("sunRay");
  sunRays.appendChild(sunRay3);


  var farmerImage = createImage("images/farmer.png");
  farmerImage.id = "farmerPrize";

  var barnImage = createImage("images/barn.png");
  barnImage.id = "barnPrize";

  var chickenImage = createImage("images/chicken.png");
  chickenImage.id = "chickenPrize";

  var goatImage = createImage("images/goat.png");
  goatImage.id = "goatPrize";

  var cowImage = createImage("images/cow.png");
  cowImage.id = "cowPrize";

  var donkeyImage = createImage("images/donkey.png");
  donkeyImage.id = "donkeyPrize";


  var chickImage = createImage("images/chick.png");
  chickImage.id = "chickPrizeM";

  var sheepImage = createImage("images/sheep.png");
  sheepImage.id = "sheepPrizeM";


  var tree = createImage("images/tree.png");
  tree.id = "treeM";

  //create button to go back to home page
  var backToHomeButton = createButton("Back to Home Page");
  backToHomeButton.id = "backHomePrizeButton";
  backToHomeButton.onclick = chooseLevel;
}


/*
   This function will display the prizes won after the hard level is completed.
   This function will be called when the "See Farm" button is clicked after the completion of the hard level.
*/
function seeFarm(){
  //clear the document and set the background image
  document.body.innerHTML = "";

  var sun = createDiv();
  sun.id = "sun";

  var sunRays = createDiv();
  sunRays.id = "rings";
  sun.appendChild(sunRays);

  var sunRay1 = createDiv();
  sunRay1.classList.add("sunRay");
  sunRays.appendChild(sunRay1);

  var sunRay2 = createDiv();
  sunRay2.classList.add("sunRay");
  sunRays.appendChild(sunRay2);

  var sunRay3 = createDiv();
  sunRay3.classList.add("sunRay");
  sunRays.appendChild(sunRay3);


  var farmerImage = createImage("images/farmer.png");
  farmerImage.id = "farmerPrize";

  var barnImage = createImage("images/barn.png");
  barnImage.id = "barnPrize";

  var chickenImage = createImage("images/chicken.png");
  chickenImage.id = "chickenPrize";

  var pigImage = createImage("images/pig.png");
  pigImage.id = "pigPrize";

  var goatImage = createImage("images/goat.png");
  goatImage.id = "goatPrize";

  var cowImage = createImage("images/cow.png");
  cowImage.id = "cowPrize";

  var donkeyImage = createImage("images/donkey.png");
  donkeyImage.id = "donkeyPrize";

  var duckImage = createImage("images/duck.png");
  duckImage.id = "duckPrize";

  var chickImage = createImage("images/chick.png");
  chickImage.id = "chickPrize";

  var sheepImage = createImage("images/sheep.png");
  sheepImage.id = "sheepPrize";

  var chicken2Image = createImage("images/chicken2.png");
  chicken2Image.id = "chicken2Prize";

  var goat2Image = createImage("images/goat2.png");
  goat2Image.id = "goat2Prize";

  var tree = createImage("images/tree.png");
  tree.id = "tree";

  //create button to go back to home page
  var backToHomeButton = createButton("Back to Home Page");
  backToHomeButton.id = "backHomePrizeButton";
  backToHomeButton.onclick = chooseLevel;
}

/*
  This function creates the question-answer mini-game for the easy level.
  This will be called when the "Easy" button on the choose level page is clicked.

  Sources:
  -shuffle elements: https://stackoverflow.com/questions/15585216/how-to-randomly-generate-numbers-without-repetition-in-javascript?noredirect=1&lq=1
*/
function createEasyQAGame(){
  //clear the entire document
  document.body.innerHTML = "";

  upToQuestion = 0;
  //create a question
  mathQuestionElement = createParagraph("", "question");

  var userAnswerDiv = createDiv();
  userAnswerDiv.id = "userAnswerDiv";

  //create an answer text box for the user
  var answer = createParagraph ("Answer: ", "answerInputlabel");
  userAnswerTextbox = createTextInput();
  userAnswerDiv.appendChild(answer);
  userAnswerDiv.appendChild(userAnswerTextbox);

  //create an answer BUTTON
  buttonElement = createButton ("Submit");
  buttonElement.id = "submit";
  //add a click event handler to check the answerInputlabel
  buttonElement.onclick = checkAnswerForEasyLevel;
  userAnswerDiv.appendChild(buttonElement);


  mathAnswer = createParagraph("", "answer");
  var answerDiv = createDiv();
  answerDiv.id = "answerDiv";
  answerDiv.appendChild(mathAnswer);

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig");
  var pigDiv = createDiv();
  pigDiv.id = "pigGame1";
  pigDiv.appendChild(pigImage);

  var containerDiv = createDiv();
  containerDiv.classList.add("answerDisplay");
  containerDiv.appendChild(answerDiv);
  containerDiv.appendChild(pigDiv);


  //This function shuffles elements
  function shuffle(o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
  //shuffle numbers inside the numbers array
  randomNumber = shuffle(numbers);
  console.log(randomNumber);

  //generate easy level questions
  generateEasyQuestion();

}


/*
  This function will generate the question for the question-answer mini game.
  This will be called as the mini-game loads and when the next button is clicked.
*/
function generateEasyQuestion(){
  //Rename the button from "Next Question" to "Submit"
  var submitButton = document.getElementById("submit");
  submitButton.innerHTML = "Submit";
  submitButton.onclick = checkAnswerForEasyLevel;

  //display a question if there is still an available question
  if (upToQuestion < easyLevel.length) {
    //get a number from the shuffled numbers inside the numbers array
    var random = randomNumber[upToQuestion];
    //use the generated random number to get a random question from the array containing the questions
    currentQuestionItem = easyLevel[random];
    console.log("Question item: " + random);
    var question = currentQuestionItem.question;
    var answer = currentQuestionItem.answer;
    mathQuestionElement.textContent = question;


  //game won
  } else{
      createTransition("Congratulations! You won a barn! Are you ready to take another challenge?", "images/barn.png", createMemoryGame);
  }
  //clear the user text field
  userAnswerTextbox.value = "";

  //display instructions
  mathAnswer.textContent = "Compute the answer of the given math problem above.";
  mathAnswer.id = "qAInstructions";
}

/*
  This function will check if the answer of the user is correct.
  This function will be called when the submit button is clicked.
*/
function checkAnswerForEasyLevel(){

    if (upToQuestion < easyLevel.length) {
      //get the text from the textbox
      var userText = userAnswerTextbox.value;

      //get the correct answer from a global variable
      var correctAnswer =  currentQuestionItem.answer;

      //check the answer and output to mathAnswer
      if (userText == correctAnswer){
        //answer is correct
        mathAnswer.textContent = "Correct!";
        mathAnswer.id = "resultC";

        //rename the button from "Submit" to "Next Question"
        var nextButton = document.getElementById("submit");
        nextButton.innerHTML = "Next Question";
        nextButton.onclick = generateEasyQuestion;
        upToQuestion++;
        console.log("upToQuestion: " + upToQuestion);
      } else {
        //answer is incorrect
        mathAnswer.textContent = "Try again!";
        mathAnswer.id = "resultW";

        var submitButton = document.getElementById("submit");
        submitButton.innerHTML = "Submit";
        submitButton.onclick = checkAnswerForEasyLevel;

        userAnswerTextbox.value = "";
      }
    }
}


/*
 This function creates the easy memory game wherein users will match tiles with the same value.
 This function will be called when the "Next Challenge" button is clicked after the first mini game, which is the question and answer game.

 Source: https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
*/
function createMemoryGame() {
  //clear the current document
  document.body.innerHTML  = "";

  var instructions = createParagraph("Match the cards with the same number.", "mcInstructions");

  let firstGuess = "";
  let secondGuess = "";
  let count = 0;
  let previousTarget = null;
  let delay = 1200;
  let matches = 0;

  //duplicate array to create a match for each card
  let gameGrid = memoryGameElements.concat(memoryGameElements);

  //randomize the cards' order every time the game loads
  gameGrid.sort(() => 0.5 - Math.random());

  const gameDiv = createDiv();
  gameDiv.classList.add("game");

  const grid = createSection();
  grid.classList.add("grid");
  gameDiv.appendChild(grid);


  //create the cards for the game
  for(var i = 0; i < gameGrid.length; i++) {
    var currentCard = gameGrid[i];
    const card = createDiv();
    card.classList.add("card");
    card.dataset.name = currentCard.name;


    //create front of cards
    const front = createDiv();
    front.classList.add("back");

    //create back of cards
    const back = createImage(currentCard.image);
    back.classList.add("front");

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  }

  //add event listener to the grid
  grid.addEventListener('click', function (event) {
    //the clicked card is the event target
    let clicked = event.target;

    //do not allow the grid section itself to be selected; only the divs inside the grid
    if(clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("match")) {
      return;
    }

    //only allow two selections of cards at a time
    if (count < 2) {
      count++;

      if (count === 1) {
        //assign first firstGuess
        firstGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("selected");
        console.log("first guess: " + firstGuess);
      } else {
        //assign second guess
        secondGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("selected");
        console.log("second guess: " + secondGuess);
      }

      //if both guesses are not empty
      if (firstGuess !== '' && secondGuess !== '') {
        //if both guesses matched
          if (firstGuess === secondGuess) {
            //call the match function with delay
            setTimeout(match, delay);
            setTimeout(resetGuesses, delay);
            matches++;
            //game won
            console.log("matches: " + matches);
            if (matches == 9) {
              createTransition("Congratulations! You finished another challenge! Here's your very first farm friend!", "images/goat.png", createEasyMultipleChoiceGame);
            }

          } else {
            setTimeout(resetGuesses, delay);
            clicked.classList.add("selected");
          }
      }
      //set the previous target to clicked
      previousTarget = clicked;
    }
  });

  //The variable match stores the match function, which will check if the cards match
  const match = () => {
    var selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
      card.classList.add("match");
    });
  }

  //reset guesses
  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
      card.classList.remove('selected');
    });
  }
}

/*
  This function will create the easy multiple choice game.
  This will be called when the "Next Challenge" button is clicked after the memory game is completed.

  Sources:
    -multiple choice quiz: https://www.sitepoint.com/simple-javascript-quiz/
    -label text: https://stackoverflow.com/questions/4488714/change-label-text-using-javascript
    -radio buttons: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
*/
function createEasyMultipleChoiceGame() {
  document.body.innerHTML = "";
  upToQuestion = 0;

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("In this challenge, you need to count the number of farm animals presented and choose your answer from the choices provided.", "multipleChoiceInstructions");

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild(paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);

  //create submit button
  buttonElement = createButton("Submit");
  buttonElement.id = "submitMCButton";
  buttonElement.onclick = checkForMCAnswer;

  //container div for the question (images)
  mCQuestionDiv = createDiv();
  mCQuestionDiv.id = "questionEasyMCContainer";

  //container div for the options for each question
  mCOptionsDiv = createDiv();
  mCOptionsDiv.id = "optionsMCDiv";

  //This function shuffles elements
  function shuffle(o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
  //shuffle numbers inside the numbers array
  randomNumber = shuffle(numbers);
  console.log("Shuffled values: " + randomNumber);

  generateMultipleChoiceQuestionAndOptions();
}

/*
  This function will generate a question and the options for the question.
*/
function generateMultipleChoiceQuestionAndOptions(){

  //display a question if there is still an available question
  if (upToQuestion < multipleChoiceElements.length){
    //get a number from the shuffled numbers inside the numbers array
    var random = randomNumber[upToQuestion]
    console.log("Current question item: " + random);
    console.log("upToQuestion: " + upToQuestion);
    //use the generated random number to get a random question from the array containing the questions
    currentQuestionItem = multipleChoiceElements[random];

    //clear the images of the previous question
    var previousQuestion = document.getElementById("questionEasyMCContainer");
    previousQuestion.innerHTML = "";
    //create the questions
    for (var i = 0; i < multipleChoiceElements[random].number; i++){
        var animalImage = createDiv();
        animalImage.classList.add("mCImage");
        animalImage.style.backgroundImage = 'url(' + multipleChoiceElements[random].animalImage + ')';
        console.log("number:" + multipleChoiceElements[random].number);
        animalImage.id = multipleChoiceElements[random].number;
        mCQuestionDiv.appendChild(animalImage);
    }
    //clear the previous options values
    var previousOptions = document.getElementById("optionsMCDiv");
    previousOptions.innerHTML = "";

    //create the options for each question
    var optionA = multipleChoiceElements[random].options.a;
    var optionB = multipleChoiceElements[random].options.b;
    var optionC = multipleChoiceElements[random].options.c;

    //create option a
    var labelA = createLabel();
    labelA.setAttribute("for", "optionA");
    labelA.innerHTML = optionA;
    console.log("option value: " + optionA);

    var radioButtonA = createRadioButtons();
    radioButtonA.setAttribute("name", "option");
    radioButtonA.classList.add("option");
    radioButtonA.setAttribute("value", "a");
    radioButtonA.setAttribute("id", "optionA");
    labelA.appendChild(radioButtonA);
    mCOptionsDiv.appendChild(labelA);

    //create option b
    var labelB = createLabel();
    labelB.setAttribute("for", "optionB");
    labelB.innerHTML = optionB;
    console.log("option value: " + optionB);

    var radioButtonB = createRadioButtons();
    radioButtonB.setAttribute("name", "option");
    radioButtonB.classList.add("option");
    radioButtonB.setAttribute("value", "b");
    radioButtonB.setAttribute("id", "optionB");
    labelB.appendChild(radioButtonB);
    mCOptionsDiv.appendChild(labelB);

    //create option c
    var labelC = createLabel();
    labelC.setAttribute("for", "optionC");
    labelC.innerHTML = optionC;
    console.log("option value: " + optionC);

    var radioButtonC = createRadioButtons();
    radioButtonC.setAttribute("name", "option");
    radioButtonC.classList.add("option");
    radioButtonC.setAttribute("value", "c");
    radioButtonC.setAttribute("id", "optionC");
    labelC.appendChild(radioButtonC);
    mCOptionsDiv.appendChild(labelC);


    //change button text
    buttonElement.innerHTML = "Submit";
    buttonElement.classList.add("submitMCButton");
    buttonElement.onclick = checkForMCAnswer;

  } else {
    createTransition("You won another farm animal! Win your next farm animal by taking the next challenge.", "images/cow.png", createMatchTheAnswerGame);
  }
   paragraphContent.removeAttribute("id");
   paragraphContent.textContent = "In this challenge, you need to count the number of farm animals presented and choose your answer from the choices provided.";
}


function checkForMCAnswer() {
  console.log("Answer checked.")
  if (upToQuestion < multipleChoiceElements.length){
    //find selected answer
    var userAnswer = null;
    var correctAnswer =  currentQuestionItem.answer;

    if (document.getElementById("optionA").checked) {
      userAnswer = document.getElementById("optionA").value;
    } else if (document.getElementById("optionB").checked) {
      userAnswer = document.getElementById("optionB").value;
    } else if (document.getElementById("optionC").checked) {
      userAnswer = document.getElementById("optionC").value;
    }

    console.log("User answer: " + userAnswer);
    console.log("Correct answer: " + correctAnswer);
    //answer is correct
    if(userAnswer === correctAnswer){
       paragraphContent.textContent = "Correct!";
       paragraphContent.id = "mcResultC";
       buttonElement.innerHTML = "Next";
       buttonElement.onclick = generateMultipleChoiceQuestionAndOptions;
       upToQuestion++;
    } else {
      //answer is wrong
       paragraphContent.textContent = "Try Again!";
       paragraphContent.id = "mcResultW";
    }
  }
}

/*
  This function creates the matching game for the easy level.
  This will be called when the next challenge button is clicked on the transition page after completing the question-answer mini-game.

  Sources:
  -touch event listener: http://www.javascriptkit.com/javatutors/touchevents.shtml
  -polyfill: https://github.com/Bernardo-Castilho/dragdroptouch/blob/master/DragDropTouch.js
*/

function createMatchTheAnswerGame() {
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the number to the math problem that it answers.", "multipleChoiceInstruction");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);


  //reset the number of correct numbers
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";

  //create number seven image
  var sevenImage = createImage("images/seven.png");
  sevenImage.setAttribute("draggable", "true");
  sevenImage.ondragstart = onNumberDragStart;
  sevenImage.id = "seven";
  sevenImage.myShape = "seven";

  var sevenDiv = createDiv();
  sevenDiv.appendChild(sevenImage);
  sevenDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(sevenDiv);

  //create number three image
  var threeImage = createImage("images/three.png");
  threeImage.setAttribute("draggable", "true");
  threeImage.ondragstart = onNumberDragStart;
  threeImage.myShape = "three";
  threeImage.id = "three";

  var threeDiv = createDiv();
  threeDiv.appendChild(threeImage);
  threeDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(threeDiv);

  //create number one image
  var oneImage = createImage("images/one.png");
  oneImage.setAttribute("draggable", "true");
  oneImage.ondragstart = onNumberDragStart;
  oneImage.id = "one";
  oneImage.myShape = "one";

  var oneDiv = createDiv();
  oneDiv.appendChild(oneImage);
  oneDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(oneDiv);


  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameProblems.length; i++){
    var currentProblem = matchingGameProblems[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameElements[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionEasy(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);

  }
}


function allowDrop(event){
  event.preventDefault();
}


//This function is called by the shape beginning to be dragged.
function onNumberDragStart(event){
  document.body.classList.remove("errorOccurred");
   currentDraggingObject = event.target;

}

/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionEasy(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if (currentDraggingObject == null) return;

    console.log("the dragging object is: " +  currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if (currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

       numberOfCorrectNumbers++;
      //check if the first set is finished. If yes, load the second set.
      if ( numberOfCorrectNumbers == matchingGameElements.length){
         createMatchTheAnswerGame2();
      }
    } else {
        //no. There was a mismatch
        currentDraggingObject = null;
        //display "X" to the box if there is a mismatch
        boxDiv.classList.add("error");
        boxDiv.innerHTML = "X";
    }
    event.preventDefault();
  }
}

/*
  This function creates the part 2 of the matching game for the easy level.
  This will be called when the first set of questions is answered correctly.

  Sources:
  -touch event listener: http://www.javascriptkit.com/javatutors/touchevents.shtml
  -polyfill: https://github.com/Bernardo-Castilho/dragdroptouch/blob/master/DragDropTouch.js
*/

function createMatchTheAnswerGame2() {
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the answer to the math problem that it answers.", "multipleChoiceInstruction");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);


  //reset the number of correct numbers
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";

  //create number nine image
  var nineImage = createImage("images/nine.png");
  nineImage.setAttribute("draggable", "true");
  nineImage.ondragstart = onNumberDragStart;
  nineImage.id = "nine";
  nineImage.myShape = "nine";

  var nineDiv = createDiv();
  nineDiv.appendChild(nineImage);
  nineDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(nineDiv);

  //create number four image
  var fourImage = createImage("images/four.png");
  fourImage.setAttribute("draggable", "true");
  fourImage.ondragstart = onNumberDragStart;
  fourImage.id = "four";
  fourImage.myShape = "four";

  var fourDiv = createDiv();
  fourDiv.appendChild(fourImage);
  fourDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(fourDiv);

  //create number six image
  var sixImage = createImage("images/six.png");
  sixImage.setAttribute("draggable", "true");
  sixImage.ondragstart = onNumberDragStart;
  sixImage.myShape = "six";
  sixImage.id = "six";

  var sixDiv = createDiv();
  sixDiv.appendChild(sixImage);
  sixDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(sixDiv);

  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameProblems2.length; i++){
    var currentProblem = matchingGameProblems2[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameElements2[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionEasy2(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);
  }
}


/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionEasy2(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if (currentDraggingObject == null) return;

    console.log("the dragging object is: " +  currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if ( currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

      numberOfCorrectNumbers++;
      //check if the second set of questions are answered correctly
      if ( numberOfCorrectNumbers == matchingGameElements2.length){
            createMatchTheAnswerGame3()
      }
    } else {
          //no. There was a mismatch
          currentDraggingObject = null;
          //display "X" to the box if there is a mismatch
          boxDiv.classList.add("error");
          boxDiv.innerHTML = "X";
      }
      event.preventDefault();
  }
}


/*
  This function creates the part 3 of the matching game for the easy level.
  This will be called when the second set of questions is answered correctly.

  Sources:
  -touch event listener: http://www.javascriptkit.com/javatutors/touchevents.shtml
  -polyfill: https://github.com/Bernardo-Castilho/dragdroptouch/blob/master/DragDropTouch.js
*/

function createMatchTheAnswerGame3() {
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the answer to the math problem that it answers.", "multipleChoiceInstruction");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);


  //reset the number of correct numbers
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";


  //create number two image
  var twoImage = createImage("images/two.png");
  twoImage.setAttribute("draggable", "true");
  twoImage.ondragstart = onNumberDragStart;
  twoImage.myShape = "two";
  twoImage.id = "two";

  var twoDiv = createDiv();
  twoDiv.appendChild(twoImage);
  twoDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(twoDiv);

  //create number five image
  var fiveImage = createImage("images/five.png");
  fiveImage.setAttribute("draggable", "true");
  fiveImage.ondragstart = onNumberDragStart;
  fiveImage.id = "five";
  fiveImage.myShape = "five";

  var fiveDiv = createDiv();
  fiveDiv.appendChild(fiveImage);
  fiveDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(fiveDiv);

  //create number eight image
  var eightImage = createImage("images/eight.png");
  eightImage.setAttribute("draggable", "true");
  eightImage.ondragstart = onNumberDragStart;
  eightImage.id = "eight";
  eightImage.myShape = "eight";

  var eightDiv = createDiv();
  eightDiv.appendChild(eightImage);
  eightDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(eightDiv);

  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameProblems3.length; i++){
    var currentProblem = matchingGameProblems3[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameElements3[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionEasy3(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);
  }
}


/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionEasy3(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if ( currentDraggingObject == null) return;

    console.log("the dragging object is: " +  currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if ( currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

       numberOfCorrectNumbers++;
      //check if the game has been won
      if ( numberOfCorrectNumbers == matchingGameElements3.length){
          endOfLevelPage("Well done! You finished the easy level! Here's another addition to your farm family!", "images/chicken.png", seeFarmEasy, createMediumQAGame);
      }
    } else {
        //no. There was a mismatch
         currentDraggingObject = null;
        //display "X" to the box if there is a mismatch
        boxDiv.classList.add("error");
        boxDiv.innerHTML = "X";
    }
    event.preventDefault();
  }
}



/*
  This function creates the question-answer mini-game for the medium level.
  This will be called when the easy button on the choose level page is clicked.

  Sources:
  -shuffle elements: https://stackoverflow.com/questions/15585216/how-to-randomly-generate-numbers-without-repetition-in-javascript?noredirect=1&lq=1
*/
function createMediumQAGame(){
  //clear the entire document
  document.body.innerHTML = "";
  upToQuestion = 0;

  //create a question
  mathQuestionElement = createParagraph("", "question");

  var userAnswerDiv = createDiv();
  userAnswerDiv.id = "userAnswerDiv";

  //create an answer text box for the user
  var answer = createParagraph ("Answer: ", "answerInputlabel");
  userAnswerTextbox = createTextInput();
  userAnswerDiv.appendChild(answer);
  userAnswerDiv.appendChild(userAnswerTextbox);

  //create an answer BUTTON
  buttonElement = createButton ("Submit");
  buttonElement.id = "submit";
  //add a click event handler to check the answerInputlabel
  buttonElement.onclick = checkAnswerForMediumLevel;
  userAnswerDiv.appendChild(buttonElement);


  mathAnswer = createParagraph("", "answer");
  var answerDiv = createDiv();
  answerDiv.id = "answerDiv";
  answerDiv.appendChild(mathAnswer);

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig");
  var pigDiv = createDiv();
  pigDiv.id = "pigGame1";
  pigDiv.appendChild(pigImage);

  var containerDiv = createDiv();
  containerDiv.classList.add("answerDisplay");
  containerDiv.appendChild(answerDiv);
  containerDiv.appendChild(pigDiv);

  //This function shuffles elements
  function shuffle(o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
  //shuffle numbers inside the numbers array
  randomNumber = shuffle(numbers);
  console.log(randomNumber);

  //generate easy level questions
  generateMediumQuestion();
}



/*
  This function will generate the question for the question-answer mini game.
  This will be called as the mini-game loads and when the next button is clicked.
*/
function generateMediumQuestion(){
  //Rename the button from "Next Question" to "Submit"
  var submitButton = document.getElementById("submit");
  submitButton.innerHTML = "Submit";
  submitButton.onclick = checkAnswerForMediumLevel;

  //display a question if there is still an available question
  if (upToQuestion < mediumLevel.length) {
    //get a number from the shuffled numbers inside the numbers array
    var random =  randomNumber[ upToQuestion]
    currentQuestionItem = mediumLevel[random];
    console.log("Question item: " + random);
    var question = currentQuestionItem.question;
    var answer = currentQuestionItem.answer;
    mathQuestionElement.textContent = question;

  //game won
  } else {
      createTransition("Another challenge completed! Here's your reward.", "images/donkey.png", createMediumMemoryGame);
  }
  //clear the user text field
  userAnswerTextbox.value = "";

  //display instructions
  mathAnswer.textContent = "Compute the answer of the given math problem above.";
  mathAnswer.id = "qAInstructions";
}

/*
  This function will check if the answer of the user is correct.
  This function will be called when the submit button is clicked.
*/
function checkAnswerForMediumLevel(){

    if (upToQuestion < easyLevel.length) {
      //get the text from the textbox
      var userText =  userAnswerTextbox.value;

      //get the correct answer from a global variable
      var correctAnswer =   currentQuestionItem.answer;

      //check the answer and output to mathAnswer
      if (userText == correctAnswer){
         mathAnswer.textContent = "Correct!";
         mathAnswer.id = "resultC";

        //rename the button from "Submit" to "Next Question"
        var nextButton = document.getElementById("submit");
        nextButton.innerHTML = "Next Question";
        nextButton.onclick = generateMediumQuestion;
        upToQuestion++;

      } else {
         mathAnswer.textContent = "Try again!";
         mathAnswer.id = "resultW";

         var submitButton = document.getElementById("submit");
         submitButton.innerHTML = "Submit";
         submitButton.onclick = checkAnswerForMediumLevel;

         userAnswerTextbox.value = "";
      }
    }
}

/*
 This function creates the medium memory game wherein users will match the tiles of the same words of a number.
 For the medium level, the tiles to be matched is the math problem and the answer to it.
 This function will be called after the first mini game, which is the question and answer game.

 Source: https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
*/
function createMediumMemoryGame() {
  //clear the current document
  document.body.innerHTML  = "";

  var instructions = createParagraph("Match the tiles with the same word.", "mcInstructions");

  let firstGuess = "";
  let secondGuess = "";
  let count = 0;
  let previousTarget = null;
  let delay = 1200;
  let matches = 0;

  //duplicate array to create a match for each card
  let gameGrid = memoryGameMediumElements.concat(memoryGameMediumElements);

  //randomize the cards order every time the game loads
  gameGrid.sort(() => 0.5 - Math.random());

  const gameDiv = createDiv();
  gameDiv.classList.add("game");

  const grid = createSection();
  grid.classList.add("grid");
  gameDiv.appendChild(grid);


  //create the cards for the game
  for (var i = 0; i < gameGrid.length; i++){
    var currentCard = gameGrid[i];
    const card = createDiv();
    card.classList.add("card");
    card.dataset.name = currentCard.name;

    //create front of cards
    const front = createDiv();
    front.classList.add("back");

    //create back of cards
    const back = createImage(currentCard.image);
    back.classList.add("front");
    //back.style.backgroundImage = 'url(' + currentCard.image + ')';

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  }

  //add event listener to the grid
  grid.addEventListener('click', function (event) {
    //the clicked card is the event target
    let clicked = event.target;

    //do not allow the grid section itself to be selected; only the divs inside the grid
    if(clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("match")) {
      return;
    }

    //only allow two selections at a time
    if (count < 2) {
      count++;

      if (count === 1) {
        //assign first firstGuess
        firstGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("selected");
        console.log("first guess: " + firstGuess);
      } else {
        //assign second guess
        secondGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("selected");
        console.log("second guess: " + secondGuess);
      }

      //if both guesses are not empty
      if (firstGuess !== '' && secondGuess !== '') {
        //if both guesses matched
          if (firstGuess === secondGuess) {
            //call the match function
            setTimeout(match, delay);
            setTimeout(resetGuesses, delay);
            matches++;

            //game won
            if (matches == 9) {
              createTransition("Good work! Welcome your another farm friend! Complete another challenge, and see what's inside this egg.", "images/egg.png", createMediumMultipleChoiceGame);
            }
          } else {
            setTimeout(resetGuesses, delay);
            clicked.classList.add("selected");
          }
      }
      //set the previous target to clicked
      previousTarget = clicked;
    }
  });

  //The variable match stores the match function, which will check if the cards match
  const match = () => {
    var selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
      card.classList.add("match");
    });
  }

  //reset guesses
  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
      card.classList.remove('selected');
    });
  }
}


/*
  This function will create the medium multiple choice game.
  This will be called after the memory game has been completed.

  Sources:
    -multiple choice quiz: https://www.sitepoint.com/simple-javascript-quiz/
    -label text: https://stackoverflow.com/questions/4488714/change-label-text-using-javascript
    -radio buttons: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

*/
function createMediumMultipleChoiceGame() {
  document.body.innerHTML = "";
  upToQuestion = 0;

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("In this challenge, you need to count the number of farm animals presented and choose your answer from the choices provided.", "multipleChoiceInstructions");

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild(paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);

  //create submit button
  buttonElement = createButton("Submit");
  buttonElement.id = "submitMCButton";
  buttonElement.onclick = checkForMCMediumAnswer;

  //container div for the question (images)
  mCQuestionDiv = createDiv();
  mCQuestionDiv.id = "questionMCContainer";

  //container div for the options for each question
  mcOptionsDiv = createDiv();
  mcOptionsDiv.id = "optionsMCDiv";

  //This function shuffles elements
  function shuffle(o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
  //shuffle numbers inside the numbers array
  randomNumber = shuffle(numbers);
  console.log("Shuffled values: " +  randomNumber);

  generateMultipleChoiceMediumQuestionAndOptions();
}

/*
  This function will generate a question and the options for the question.
*/
function generateMultipleChoiceMediumQuestionAndOptions(){

  //display a question if there is still an available question
  if (upToQuestion < multipleChoiceMediumElements.length){
    //get a number from the shuffled numbers inside the numbers array
    var random = randomNumber[upToQuestion]
    console.log("Current question item: " + random);
    //use the generated random number to get a random question from the array containing the questions

    currentQuestionItem = multipleChoiceMediumElements[random];

    //clear the images of the previous question
    var previousQuestion = document.getElementById("questionMCContainer");
    previousQuestion.innerHTML = "";
    //create the questions
    for (var i = 0; i < multipleChoiceMediumElements[random].number; i++){
        var animalImage = createDiv();
        animalImage.classList.add("mCImage");
        animalImage.style.backgroundImage = 'url(' + multipleChoiceMediumElements[random].animalImage + ')';
        console.log("number:" + multipleChoiceMediumElements[random].number);
        animalImage.id = multipleChoiceMediumElements[random].number;
        mCQuestionDiv.appendChild(animalImage);
    }

    //clear the previous options values
    var previousOptions = document.getElementById("optionsMCDiv");
    previousOptions.innerHTML = "";

    //create the options for each question
    var optionA = multipleChoiceMediumElements[random].options.a;
    var optionB = multipleChoiceMediumElements[random].options.b;
    var optionC = multipleChoiceMediumElements[random].options.c;

    //create option a
    var labelA = createLabel();
    labelA.setAttribute("for", "optionA");
    labelA.innerHTML = optionA;
    console.log("option value: " + optionA);

    var radioButtonA = createRadioButtons();
    radioButtonA.setAttribute("name", "option");
    radioButtonA.classList.add("option");
    radioButtonA.setAttribute("value", "a");
    radioButtonA.setAttribute("id", "optionA");
    labelA.appendChild(radioButtonA);
    mcOptionsDiv.appendChild(labelA);

    //create option b
    var labelB = createLabel();
    labelB.setAttribute("for", "optionB");
    labelB.innerHTML = optionB;
    console.log("option value: " + optionB);

    var radioButtonB = createRadioButtons();
    radioButtonB.setAttribute("name", "option");
    radioButtonB.classList.add("option");
    radioButtonB.setAttribute("value", "b");
    radioButtonB.setAttribute("id", "optionB");
    labelB.appendChild(radioButtonB);
    mcOptionsDiv.appendChild(labelB);

    //create option c
    var labelC = createLabel();
    labelC.setAttribute("for", "optionC");
    labelC.innerHTML = optionC;
    console.log("option value: " + optionC);

    var radioButtonC = createRadioButtons();
    radioButtonC.setAttribute("name", "option");
    radioButtonC.classList.add("option");
    radioButtonC.setAttribute("value", "c");
    radioButtonC.setAttribute("id", "optionC");
    labelC.appendChild(radioButtonC);
    mcOptionsDiv.appendChild(labelC);

    //change button text
    buttonElement.innerHTML = "Submit";
    buttonElement.classList.add("submitMCButton");
    buttonElement.onclick = checkForMCMediumAnswer;

  } else {
    createTransition("Wow! Another challenge completed! Good work! Your egg just hatched into this cute little chick!", "images/chick.png", createMatchTheAnswerMediumGame);
  }
   paragraphContent.removeAttribute("id");
   paragraphContent.textContent = "In this challenge, you need to count the number of farm animals presented and choose your answer from the choices provided.";
}

function checkForMCMediumAnswer() {

  if (upToQuestion < multipleChoiceMediumElements.length){
    //find selected answer
    var userAnswer = null;
    var correctAnswer =  currentQuestionItem.answer;

    if (document.getElementById("optionA").checked) {
      userAnswer = document.getElementById("optionA").value;
    } else if (document.getElementById("optionB").checked) {
      userAnswer = document.getElementById("optionB").value;
    } else if (document.getElementById("optionC").checked) {
      userAnswer = document.getElementById("optionC").value;
    }

    console.log("User answer: " + userAnswer);
    console.log("Correct answer: " + correctAnswer);
    //answer is correct
    if(userAnswer === correctAnswer){
       paragraphContent.textContent = "Correct!";
       paragraphContent.id = "mcResultC";
       buttonElement.innerHTML = "Next";
       buttonElement.onclick = generateMultipleChoiceMediumQuestionAndOptions;
       upToQuestion++;
    } else {
      //answer is wrong
       paragraphContent.textContent = "Try Again!";
       paragraphContent.id = "mcResultW";
    }
  }
}


/*
  This function creates the matching game for the medium level.
  This will be called when the next challenge button is clicked on the transition page after completing the question-answer mini-game.
*/

function createMatchTheAnswerMediumGame() {
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the number to the math problem that it answers.", "multipleChoiceInstructions");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);

  //reset the number of correct shapes
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";

  //create number five image
  var fiveImage = createImage("images/five.png");
  fiveImage.setAttribute("draggable", "true");
  fiveImage.ondragstart = onNumberDragStart;
  fiveImage.id = "five";
  fiveImage.myShape = "five";

  var fiveDiv = createDiv();
  fiveDiv.appendChild(fiveImage);
  fiveDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(fiveDiv);

  //create number nine image
  var nineImage = createImage("images/nine.png");
  nineImage.setAttribute("draggable", "true");
  nineImage.ondragstart = onNumberDragStart;
  nineImage.id = "nine";
  nineImage.myShape = "nine";

  var nineDiv = createDiv();
  nineDiv.appendChild(nineImage);
  nineDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(nineDiv);

  //create number zero image
  var zeroImage = createImage("images/zero.png");
  zeroImage.setAttribute("draggable", "true");
  zeroImage.ondragstart = onNumberDragStart;
  zeroImage.myShape = "zero";
  zeroImage.id = "zero";

  var zeroDiv = createDiv();
  zeroDiv.appendChild(zeroImage);
  zeroDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(zeroDiv);


  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameProblems.length; i++){
    var currentProblem = matchingGameMediumProblems[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameMediumElements[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionMedium(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);
  }
}


/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionMedium(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if (currentDraggingObject == null) return;

    console.log("the dragging object is: " + currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if (currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

      numberOfCorrectNumbers++;
      //check if the first set of questions is answered correctly
      if (numberOfCorrectNumbers == matchingGameMediumElements.length){
        //load the second set of questions
        createMatchTheAnswerMediumGame2()
      }
    } else {
        //no. There was a mismatch
         currentDraggingObject = null;
        //display "X" to the box if there is a mismatch
        boxDiv.classList.add("error");
        boxDiv.innerHTML = "X";
    }
    event.preventDefault();
  }
}


/*
  This function creates the part 2 of the matching game for the easy level.
  This will be called when the first set of questions is answered correctly.

  Sources:
  -touch event listener: http://www.javascriptkit.com/javatutors/touchevents.shtml
  -polyfill: https://github.com/Bernardo-Castilho/dragdroptouch/blob/master/DragDropTouch.js
*/

function createMatchTheAnswerMediumGame2(){
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the answer to the math problem that it answers.", "multipleChoiceInstruction");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);


  //reset the number of correct numbers
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";

  //create number fourteen image
  var fourteenImage = createImage("images/raw/14.jpg");
  fourteenImage.setAttribute("draggable", "true");
  fourteenImage.ondragstart = onNumberDragStart;
  fourteenImage.id = "fourteen";
  fourteenImage.myShape = "fourteen";

  var fourteenDiv = createDiv();
  fourteenDiv.appendChild(fourteenImage);
  fourteenDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(fourteenDiv);

  //create number ten image
  var tenImage = createImage("images/raw/10.jpg");
  tenImage.setAttribute("draggable", "true");
  tenImage.ondragstart = onNumberDragStart;
  tenImage.id = "ten";
  tenImage.myShape = "ten";

  var tenDiv = createDiv();
  tenDiv.appendChild(tenImage);
  tenDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(tenDiv);

  //create number seventeen image
  var seventeenImage = createImage("images/raw/17.jpg");
  seventeenImage.setAttribute("draggable", "true");
  seventeenImage.ondragstart = onNumberDragStart;
  seventeenImage.myShape = "seventeen";
  seventeenImage.id = "seventeen";

  var seventeenDiv = createDiv();
  seventeenDiv.appendChild(seventeenImage);
  seventeenDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(seventeenDiv);

  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameMediumProblems2.length; i++){
    var currentProblem = matchingGameMediumProblems2[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameMediumElements2[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionMedium2(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);
  }
}


/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionMedium2(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if (currentDraggingObject == null) return;

    console.log("the dragging object is: " + currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if (currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

      numberOfCorrectNumbers++;
        //check if the second set of questions are answered correctly
        if (numberOfCorrectNumbers == matchingGameMediumElements2.length){
            createMatchTheAnswerMediumGame3();
        }
      } else {
          //no. There was a mismatch
          currentDraggingObject = null;
          //display "X" to the box if there is a mismatch
          boxDiv.classList.add("error");
          boxDiv.innerHTML = "X";
      }
      event.preventDefault();
  }
}


/*
  This function creates the part 3 of the matching game for the medium level.
  This will be called when the second set of questions is answered correctly.

  Sources:
  -touch event listener: http://www.javascriptkit.com/javatutors/touchevents.shtml
  -polyfill: https://github.com/Bernardo-Castilho/dragdroptouch/blob/master/DragDropTouch.js
*/

function createMatchTheAnswerMediumGame3() {
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the answer to the math problem that it answers.", "multipleChoiceInstruction");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);


  //reset the number of correct numbers
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";

  //create number eighteen image
  var eighteenImage = createImage("images/raw/18.jpg");
  eighteenImage.setAttribute("draggable", "true");
  eighteenImage.ondragstart = onNumberDragStart;
  eighteenImage.id = "eighteen";
  eighteenImage.myShape = "eighteen";

  var eighteenDiv = createDiv();
  eighteenDiv.appendChild(eighteenImage);
  eighteenDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(eighteenDiv);

  //create number twentyFour image
  var twentyFourImage = createImage("images/raw/24.jpg");
  twentyFourImage.setAttribute("draggable", "true");
  twentyFourImage.ondragstart = onNumberDragStart;
  twentyFourImage.id = "twentyFour";
  twentyFourImage.myShape = "twentyFour";

  var twentyFourDiv = createDiv();
  twentyFourDiv.appendChild(twentyFourImage);
  twentyFourDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(twentyFourDiv);

  //create number three image
  var threeImage = createImage("images/raw/3.jpg");
  threeImage.setAttribute("draggable", "true");
  threeImage.ondragstart = onNumberDragStart;
  threeImage.myShape = "three";
  threeImage.id = "three";

  var threeDiv = createDiv();
  threeDiv.appendChild(threeImage);
  threeDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(threeDiv);

  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameMediumProblems3.length; i++){
    var currentProblem = matchingGameMediumProblems3[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameMediumElements3[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionMedium3(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);

  }
}


/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionMedium3(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if (currentDraggingObject == null) return;

    console.log("the dragging object is: " + currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if (currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

      numberOfCorrectNumbers++;
      //check if the game has been won
      if (numberOfCorrectNumbers == matchingGameMediumElements3.length){

        endOfLevelPage("Another job well done! Here's a fluffy friend for you. I know you want more, so what are you waiting for? Take the next challenge now!", "images/sheep.png", seeFarmMedium, createHardQAGame);
      }
    } else {
        //no. There was a mismatch
        currentDraggingObject = null;

        //display "X" to the box if there is a mismatch
        boxDiv.classList.add("error");
        boxDiv.innerHTML = "X";
    }
    event.preventDefault();
  }
}


/*
  This function creates the question-answer mini-game for the hard level.
  This will be called when the easy button on the choose level page is clicked.

  Sources:
  -shuffle elements: https://stackoverflow.com/questions/15585216/how-to-randomly-generate-numbers-without-repetition-in-javascript?noredirect=1&lq=1
*/
function createHardQAGame(){
  //clear the entire document
  document.body.innerHTML = "";
  upToQuestion = 0;

  //create a question
  mathQuestionElement = createParagraph("", "questionH");

  var userAnswerDiv = createDiv();
  userAnswerDiv.id = "userAnswerDiv";

  //create an answer text box for the user
  var answer = createParagraph ("Answer: ", "answerInputlabel");
  userAnswerTextbox = createTextInput();
  userAnswerDiv.appendChild(answer);
  userAnswerDiv.appendChild(userAnswerTextbox);

  //create an answer BUTTON
  buttonElement = createButton ("Submit");
  buttonElement.id = "submit";
  //add a click event handler to check the answerInputlabel
  buttonElement.onclick = checkAnswerForHardLevel;
  userAnswerDiv.appendChild(buttonElement);


  mathAnswer = createParagraph("", "answer");
  var answerDiv = createDiv();
  answerDiv.id = "answerDiv";
  answerDiv.appendChild( mathAnswer);

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig");
  var pigDiv = createDiv();
  pigDiv.id = "pigGame1";
  pigDiv.appendChild(pigImage);

  var containerDiv = createDiv();
  containerDiv.classList.add("answerDisplayH");
  containerDiv.appendChild(answerDiv);
  containerDiv.appendChild(pigDiv);


  //This function shuffles elements
  function shuffle(o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
  //shuffle numbers inside the numbers array
  randomNumber = shuffle(numbers);
  console.log(randomNumber);

  //generate easy level questions
  generateHardQuestion();

}



/*
  This function will generate the question for the question-answer mini game hard level.
  This will be called as the mini-game loads and when the next button is clicked.
*/
function generateHardQuestion(){
  //Rename the button from "Next Question" to "Submit"
  var submitButton = document.getElementById("submit");
  submitButton.innerHTML = "Submit";
  submitButton.onclick = checkAnswerForHardLevel;


  //display a question if there is still an available question
  if (upToQuestion < hardLevel.length) {
    //get a number from the shuffled numbers inside the numbers array
    var random = randomNumber[ upToQuestion]
    currentQuestionItem = hardLevel[random];
    console.log("Question item: " + random);
    var question = currentQuestionItem.question;
    var answer = currentQuestionItem.answer;
    mathQuestionElement.textContent = question;

  //game won
  } else {
      createTransition("Your farm family is surely growing! Accept this gift from us.", "images/pig.png", createHardMemoryGame);
  }
  //clear the user text field
   userAnswerTextbox.value = "";

  //display instructions
   mathAnswer.textContent = "Compute the answer of the given math problem above.";
   mathAnswer.id = "qAInstructions";
}

/*
  This function will check if the answer of the user is correct.
  This function will be called when the submit button is clicked.
*/
function checkAnswerForHardLevel(){
    if (upToQuestion < easyLevel.length) {
      //get the text from the textbox
      var userText = userAnswerTextbox.value;

      //get the correct answer from a global variable
      var correctAnswer = currentQuestionItem.answer;

      //check the answer and output to mathAnswer
      if (userText == correctAnswer){
         mathAnswer.textContent = "Correct!";
         mathAnswer.id = "resultC";

        //rename the button from "Submit" to "Next Question"
        var nextButton = document.getElementById("submit");
        nextButton.innerHTML = "Next Question";
        nextButton.onclick = generateHardQuestion;
        upToQuestion++;

      } else {
         mathAnswer.textContent = "Try again!";
         mathAnswer.id = "resultW";

        var submitButton = document.getElementById("submit");
        submitButton.innerHTML = "Submit";
        submitButton.onclick = checkAnswerForHardLevel;

        userAnswerTextbox.value = "";
      }
    }
}



/*
 This function creates the hard memory game wherein users will match the tile of the math problem and the tile of its answer.
 For the medium level, the tiles to be matched is the math problem and the answer to it.
 This function will be called after the first mini game, which is the question and answer game.

 Source: https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/
*/
function createHardMemoryGame() {
  //clear the current document
  document.body.innerHTML  = "";

  var instructions = createParagraph("Match the math problem to its answer.", "mcInstructions");

  let firstGuess = "";
  let secondGuess = "";
  let count = 0;
  let previousTarget = null;
  let delay = 1200;
  let matches = 0;

  //duplicate array to create a match for each card
  let gameGrid = memoryGameHardElements.concat(memoryGameHardElements2);

  //randomize the cards order every time the game loads
  gameGrid.sort(() => 0.5 - Math.random());

  const gameDiv = createDiv();
  gameDiv.classList.add("game");

  const grid = createSection();
  grid.classList.add("grid");
  gameDiv.appendChild(grid);


  //create the cards for the game
  for (var i = 0; i < gameGrid.length; i++){
    var currentCard = gameGrid[i];
    const card = createDiv();
    card.classList.add("card");
    card.dataset.name = currentCard.name;


    //create front of cards
    const front = createDiv();
    front.classList.add("back");

    //create back of cards
    const back = createImage(currentCard.image);
    back.classList.add("front");
    //back.style.backgroundImage = 'url(' + currentCard.image + ')';

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  }

  //add event listener to the grid
  grid.addEventListener('click', function (event) {
    //the clicked card is the event target
    let clicked = event.target;

    //do not allow the grid section itself to be selected; only the divs inside the grid
    if(clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("match")) {
      return;
    }

    //only allow two selections at a time
    if (count < 2) {
      count++;

      if (count === 1) {
        //assign first firstGuess
        firstGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("selected");
        console.log("first guess: " + firstGuess);
      } else {
        //assign second guess
        secondGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("selected");
        console.log("second guess: " + secondGuess);
      }

      //if both guesses are not empty
      if (firstGuess !== '' && secondGuess !== '') {
        //if both guesses matched
          if (firstGuess === secondGuess) {
            //call the match function
            setTimeout(match, delay);
            setTimeout(resetGuesses, delay);
            matches++;

            //game won
            if (matches == 9) {
              createTransition("Whew! That was tough! Here's your reward for a great job!", "images/chicken2.png", createHardMultipleChoiceGame);
            }

          } else {
            setTimeout(resetGuesses, delay);
            clicked.classList.add("selected");
          }
      }
      //set the previous target to clicked
      previousTarget = clicked;
    }

  });

  //The variable match stores the match function, which will check if the cards match
  const match = () => {
    var selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
      card.classList.add("match");
    });
  }

  //reset guesses
  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll(".selected");
    selected.forEach(card => {
      card.classList.remove('selected');
    });
  }
}

/*
  This function will create the multiple choice game.
  This will be called after the memory game has been completed.

  Sources:
    -multiple choice quiz: https://www.sitepoint.com/simple-javascript-quiz/
    -label text: https://stackoverflow.com/questions/4488714/change-label-text-using-javascript
    -radio buttons: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

*/
function createHardMultipleChoiceGame() {
  document.body.innerHTML = "";
  upToQuestion = 0;
  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("From the choices provided, choose the answer to the math problem.", "multipleChoiceHardInstructions");


  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);

  //create submit button
  buttonElement = createButton("Submit");
  buttonElement.id = "submitMCButton";
  buttonElement.onclick = checkForMCHardAnswer;

  //container div for the question (images)
  mCQuestionDiv = createDiv();
  mCQuestionDiv.id = "questionMCHardContainer";

  //container div for the options for each question
  mcOptionsDiv = createDiv();
  mcOptionsDiv.id = "optionsMCDiv";

  //This function shuffles elements
  function shuffle(o) {
      for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
  //shuffle numbers inside the numbers array
  randomNumber = shuffle(numbers);
  console.log("Shuffled values: " +  randomNumber);

  generateMultipleChoiceHardQuestionAndOptions();

}

/*
  This function will generate a question and the options for the question.
*/
function generateMultipleChoiceHardQuestionAndOptions(){

  //display a question if there is still an available question
  if (upToQuestion < multipleChoiceHardElements.length){

    //get a number from the shuffled numbers inside the numbers array
    var random = randomNumber[ upToQuestion]
    console.log("Current question item: " + random);
    //use the generated random number to get a random question from the array containing the questions
    currentQuestionItem = multipleChoiceHardElements[random];

    //clear the images of the previous question
    var previousQuestion = document.getElementById("questionMCHardContainer");
    previousQuestion.innerHTML = "";
    //create the questions

    var questionDiv = createDiv();
    questionDiv.classList.add("mCHardImage");
    questionDiv.style.backgroundImage = 'url(' + multipleChoiceHardElements[random].questionImage + ')';
    mCQuestionDiv.appendChild(questionDiv);


    //clear the previous options values
    var previousOptions = document.getElementById("optionsMCDiv");
    previousOptions.innerHTML = "";


    //create the options for each question
    var optionA = multipleChoiceHardElements[random].options.a;
    var optionB = multipleChoiceHardElements[random].options.b;
    var optionC = multipleChoiceHardElements[random].options.c;


    //create option a
    var labelA = createLabel();
    labelA.setAttribute("for", "optionA");
    labelA.innerHTML = optionA;
    console.log("option value: " + optionA);

    var radioButtonA = createRadioButtons();
    radioButtonA.setAttribute("name", "option");
    radioButtonA.classList.add("option");
    radioButtonA.setAttribute("value", "a");
    radioButtonA.setAttribute("id", "optionA");
    labelA.appendChild(radioButtonA);
    mcOptionsDiv.appendChild(labelA);

    //create option b
    var labelB = createLabel();
    labelB.setAttribute("for", "optionB");
    labelB.innerHTML = optionB;
    console.log("option value: " + optionB);

    var radioButtonB = createRadioButtons();
    radioButtonB.setAttribute("name", "option");
    radioButtonB.classList.add("option");
    radioButtonB.setAttribute("value", "b");
    radioButtonB.setAttribute("id", "optionB");
    labelB.appendChild(radioButtonB);
    mcOptionsDiv.appendChild(labelB);

    //create option c
    var labelC = createLabel();
    labelC.setAttribute("for", "optionC");
    labelC.innerHTML = optionC;
    console.log("option value: " + optionC);

    var radioButtonC = createRadioButtons();
    radioButtonC.setAttribute("name", "option");
    radioButtonC.classList.add("option");
    radioButtonC.setAttribute("value", "c");
    radioButtonC.setAttribute("id", "optionC");
    labelC.appendChild(radioButtonC);
    mcOptionsDiv.appendChild(labelC);


    //change button text
    buttonElement.innerHTML = "Submit";
    buttonElement.id = "submitMCButton";
    buttonElement.onclick = checkForMCHardAnswer;

  } else {
    createTransition("There's always a room for more farm friends. Am I right, or am I right?", "images/goat2.png", createMatchTheAnswerHardGame);
  }
   paragraphContent.removeAttribute("id");
   paragraphContent.textContent = "From the choices provided, choose the answer to the math problem.";
}


function checkForMCHardAnswer() {

  if (upToQuestion < multipleChoiceHardElements.length){
    //find selected answer
    var userAnswer = null;
    var correctAnswer = currentQuestionItem.answer;

    if (document.getElementById("optionA").checked) {
      userAnswer = document.getElementById("optionA").value;
    } else if (document.getElementById("optionB").checked) {
      userAnswer = document.getElementById("optionB").value;
    } else if (document.getElementById("optionC").checked) {
      userAnswer = document.getElementById("optionC").value;
    }

    console.log("User answer: " + userAnswer);
    console.log("Correct answer: " + correctAnswer);
    //answer is correct
    if(userAnswer === correctAnswer){
       paragraphContent.textContent = "Correct!";
       paragraphContent.id = "mcResultC";
       buttonElement.innerHTML = "Next";
       buttonElement.onclick = generateMultipleChoiceHardQuestionAndOptions;
       upToQuestion++;
    } else {
      //answer is wrong
       paragraphContent.textContent = "Try Again!";
       paragraphContent.id = "mcResultW";
    }
    console.log("upToQuestion: " +  upToQuestion);
  }
}


/*
  This function creates the matching game for the hard level.
  This will be called when the next challenge button is clicked on the transition page after completing the question-answer mini-game.

  Sources:
  -touch event listener: http://www.javascriptkit.com/javatutors/touchevents.shtml
  -polyfill: https://github.com/Bernardo-Castilho/dragdroptouch/blob/master/DragDropTouch.js
*/

function createMatchTheAnswerHardGame() {
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the number to the math problem that it answers.", "multipleChoiceInstructions");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);


  //reset the number of correct shapes
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";

  //create number 25 image
  var twentyFiveImage = createImage("images/raw/25.jpg");
  twentyFiveImage.setAttribute("draggable", "true");
  twentyFiveImage.ondragstart = onNumberDragStart;
  twentyFiveImage.myShape = "twentyFive";
  twentyFiveImage.id = "twentyFive";

  var twentyFiveDiv = createDiv();
  twentyFiveDiv.appendChild(twentyFiveImage);
  twentyFiveDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(twentyFiveDiv);

  //create number 18 image
  var eighteenImage = createImage("images/raw/18.jpg");
  eighteenImage.setAttribute("draggable", "true");
  eighteenImage.ondragstart = onNumberDragStart;
  eighteenImage.id = "eighteen";
  eighteenImage.myShape = "eighteen";

  var eighteenDiv = createDiv();
  eighteenDiv.appendChild(eighteenImage);
  eighteenDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(eighteenDiv);


  //create number 39 image
  var thirtyNineImage = createImage("images/raw/39.jpg");
  thirtyNineImage.setAttribute("draggable", "true");
  thirtyNineImage.ondragstart = onNumberDragStart;
  thirtyNineImage.id = "thirtyNine";
  thirtyNineImage.myShape = "thirtyNine";

  var thirtyNineDiv = createDiv();
  thirtyNineDiv.appendChild(thirtyNineImage);
  thirtyNineDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(thirtyNineDiv);


  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameHardProblems.length; i++){
    var currentProblem = matchingGameHardProblems[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameHardElements[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionHard(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);
  }
}


/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionHard(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if (currentDraggingObject == null) return;

    console.log("the dragging object is: " + currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if (currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

       numberOfCorrectNumbers++;
      //check if the game has been won
      if (numberOfCorrectNumbers == matchingGameHardElements.length){
        createMatchTheAnswerHardGame2();
      }
    } else {
        //no. There was a mismatch
         currentDraggingObject = null;
        //display "X" to the box if there is a mismatch
        boxDiv.classList.add("error");
        boxDiv.innerHTML = "X";
    }
    event.preventDefault();
  }
}


/*
  This function creates the part 2 of the matching game for the hard level.
  This will be called when the first set of questions is answered correctly.

  Sources:
  -touch event listener: http://www.javascriptkit.com/javatutors/touchevents.shtml
  -polyfill: https://github.com/Bernardo-Castilho/dragdroptouch/blob/master/DragDropTouch.js
*/

function createMatchTheAnswerHardGame2() {
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the answer to the math problem that it answers.", "multipleChoiceInstruction");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);


  //reset the number of correct numbers
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";

  //create number thirteen image
  var thirteenImage = createImage("images/raw/13.jpg");
  thirteenImage.setAttribute("draggable", "true");
  thirteenImage.ondragstart = onNumberDragStart;
  thirteenImage.id = "thirteen";
  thirteenImage.myShape = "thirteen";

  var thirteenDiv = createDiv();
  thirteenDiv.appendChild(thirteenImage);
  thirteenDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(thirteenDiv);

  //create number twentyFour image
  var twentyFourImage = createImage("images/raw/24.jpg");
  twentyFourImage.setAttribute("draggable", "true");
  twentyFourImage.ondragstart = onNumberDragStart;
  twentyFourImage.id = "twentyFour";
  twentyFourImage.myShape = "twentyFour";

  var twentyFourDiv = createDiv();
  twentyFourDiv.appendChild(twentyFourImage);
  twentyFourDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(twentyFourDiv);

  //create number ninetyNine image
  var ninetyNineImage = createImage("images/raw/99.jpg");
  ninetyNineImage.setAttribute("draggable", "true");
  ninetyNineImage.ondragstart = onNumberDragStart;
  ninetyNineImage.myShape = "ninetyNine";
  ninetyNineImage.id = "ninetyNine";

  var ninetyNineDiv = createDiv();
  ninetyNineDiv.appendChild(ninetyNineImage);
  ninetyNineDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(ninetyNineDiv);

  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameHardProblems2.length; i++){
    var currentProblem = matchingGameHardProblems2[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameHardElements2[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionHard2(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);

  }
}

/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionHard2(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if ( currentDraggingObject == null) return;

    console.log("the dragging object is: " +  currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if (currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

       numberOfCorrectNumbers++;
        //check if the second set of questions are answered correctly
        if ( numberOfCorrectNumbers == matchingGameHardElements2.length){
            createMatchTheAnswerHardGame3();
        }
      } else {
          //no. There was a mismatch
           currentDraggingObject = null;
          //display "X" to the box if there is a mismatch
          boxDiv.classList.add("error");
          boxDiv.innerHTML = "X";
      }
      event.preventDefault();
  }
}


/*
  This function creates the part 3 of the matching game for the hard level.
  This will be called when the second set of questions is answered correctly.

  Sources:
  -touch event listener: http://www.javascriptkit.com/javatutors/touchevents.shtml
  -polyfill: https://github.com/Bernardo-Castilho/dragdroptouch/blob/master/DragDropTouch.js
*/

function createMatchTheAnswerHardGame3() {
  //clear the current document
  document.body.innerHTML  = "";

  var pigImage = createImage("images/pig2.png");
  pigImage.classList.add("pig3");

  //create pig's message
  paragraphContent = createParagraph("Match the answer to the math problem that it answers.", "multipleChoiceInstruction");
  paragraphContent.id = "matchInstructions";

  var messageDiv = createDiv();
  messageDiv.classList.add("mCInstructionsDiv");
  messageDiv.appendChild( paragraphContent);

  var containerDiv = createDiv();
  containerDiv.classList.add("mCInstructionsContainerDiv");
  containerDiv.appendChild(pigImage);
  containerDiv.appendChild(messageDiv);


  //reset the number of correct numbers
  numberOfCorrectNumbers = 0;

  //create div container for the number images
  var numberImagesContainerDiv = createDiv();
  numberImagesContainerDiv.id = "numberImage";


  //create number eightyTwo image
  var eightyTwoImage = createImage("images/raw/82.jpg");
  eightyTwoImage.setAttribute("draggable", "true");
  eightyTwoImage.ondragstart = onNumberDragStart;
  eightyTwoImage.myShape = "eightyTwo";
  eightyTwoImage.id = "eightyTwo";

  var eightyTwoDiv = createDiv();
  eightyTwoDiv.appendChild(eightyTwoImage);
  eightyTwoDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(eightyTwoDiv);

  //create number thirtyNine image
  var thirtyNineImage = createImage("images/raw/39.jpg");
  thirtyNineImage.setAttribute("draggable", "true");
  thirtyNineImage.ondragstart = onNumberDragStart;
  thirtyNineImage.id = "thirtyNine";
  thirtyNineImage.myShape = "thirtyNine";

  var thirtyNineDiv = createDiv();
  thirtyNineDiv.appendChild(thirtyNineImage);
  thirtyNineDiv.classList.add("numberDiv");
  numberImagesContainerDiv.appendChild(thirtyNineDiv);

  //create number fortyOne image
  var fortyOneImage = createImage("images/raw/41.jpg");
  fortyOneImage.setAttribute("draggable", "true");
  fortyOneImage.ondragstart = onNumberDragStart;
  fortyOneImage.id = "fortyOne";
  fortyOneImage.myShape = "fortyOne";

  var fortyOneDiv = createDiv();
  fortyOneDiv.appendChild(fortyOneImage);
  fortyOneDiv.classList.add("numberDiv");
  //add image to div container
  numberImagesContainerDiv.appendChild(fortyOneDiv);

  //create div for the square boxes created for answers
  var answerContainerDiv = createDiv();
  answerContainerDiv.id = "numberText";

  //create square boxes
  for (var i = 0; i < matchingGameHardProblems3.length; i++){
    var currentProblem = matchingGameHardProblems3[i];
    //create texts for the math problem to be placed on top of the boxes
    var mathProblem = createParagraph();
    mathProblem.innerHTML = currentProblem;

    var textDiv = createDiv();
    textDiv.appendChild(mathProblem);
    textDiv.classList.add("text");
    answerContainerDiv.appendChild(textDiv);
    //create boxes
    var boxDiv = createDiv();
    boxDiv.myShape = matchingGameHardElements3[i];
    boxDiv.classList.add("box");
    boxDiv.ondrop = createOnBoxDropFunctionHard3(boxDiv);
    boxDiv.ondragover = allowDrop;
    answerContainerDiv.appendChild(boxDiv);
  }
}


/*
  The created function is called on the container that receives a drag event.
  Any information about what was received should be recorerd in:
    event.dataTransfer.getData("text")
*/
function createOnBoxDropFunctionHard3(boxDiv){
  //this function gets called whenever a drop event occurs
  return function(event){
    //error checking
    if (currentDraggingObject == null) return;

    console.log("the dragging object is: " + currentDraggingObject.myShape);
    console.log("drop triggered on: " + boxDiv.myShape);

    //check if the shape of the dragging shape + dragging container are the numberImage
    if (currentDraggingObject.myShape == boxDiv.myShape){
      //yes they are the same
      boxDiv.innerHTML = "";
      boxDiv.classList.remove("error");
      boxDiv.appendChild( currentDraggingObject);

      numberOfCorrectNumbers++;

      //check if the game has been won
      if (numberOfCorrectNumbers == matchingGameHardElements3.length){

          endOfGamePage("Yay! You are definitely a math genius! As promised, here's another little farm friend for you! Hope you enjoyed!", "images/duck.png", seeFarm);
      }
    } else {
        //no. There was a mismatch
        currentDraggingObject = null;
        //display "X" to the box if there is a mismatch
        boxDiv.classList.add("error");
        boxDiv.innerHTML = "X";
    }
    event.preventDefault();
  }
}
