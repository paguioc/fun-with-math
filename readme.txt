Developer: Crisilyn Paguio

Application Title: Fun With Math

Application Overview:
  This application is an educational Math game for kids in primary level. It has
  three levels, and each level has four mini games to be completed in order to
  get a reward, which will help a farmer build his own farm.

Major Features:
  This game includes the following features:
  -Four fun mini games to make learning Math more exciting
  -Different levels with different difficulties to cater to different levels of math knowledge
  -Rewards after the completion of each mini game
  -Multiple chances to get the correct answer
  -No time limit to give children time to solve for the math problems
  -Positive feedbacks for encouragement

Major functions
  -displayHomePage: displays the home page of the app
  -chooseLevel: displays the levels available and the descriptions of each level
  -createEasyQAGame, createMediumQAGame, createHardQAGame: create the question and answer games (easy, medium, hard)
  -generateEasyQuestion, generateMediumQuestion, generateHardQuestion: generate the questions for the question and answer game for all levels (easy, medium, hard)
  -checkAnswerForEasyLevel, checkAnswerForMediumLevel, checkAnswerForHardLevel: check the answers for the question and answer game for all levels (easy, medium, hard)
  -createMemoryGame, createMediumMemoryGame, createHardMemoryGame: create the memory games (easy, medium, hard)
  -createEasyMultipleChoiceGame, createMediumMultipleChoiceGame, createHardMultipleChoiceGame: create the multiple choice games (easy, medium, hard)
  -generateMultipleChoiceQuestionAndOptions, generateMultipleChoiceMediumQuestionAndOptions, generateMultipleChoiceHardQuestionAndOptions: generate the questions and options for the multiple choice games for all levels (easy, medium, hard)
  -checkForMCAnswer, checkForMCMediumAnswer, checkForMCHardAnswer: check the answers for the multiple choice games for all levels (easy, medium, hard)
  -createMatchTheAnswerGame, createMatchTheAnswerGame2,createMatchTheAnswerGame3: create match the answer game for the easy level
  -createMatchTheAnswerMediumGame, createMatchTheAnswerMediumGame2, createMatchTheAnswerMediumGame3: create match the answer game for the medium level
  -createMatchTheAnswerHardGame, createMatchTheAnswerHardGame2, createMatchTheAnswerHardGame3: create match the answer game for the hard level
  -allowDrop, onNumberDragStart: functions for the drop and drag
  -createOnBoxDropFunctionEasy, createOnBoxDropFunctionEasy2, createOnBoxDropFunctionEasy3,
   createOnBoxDropFunctionMedium, createOnBoxDropFunctionMedium2, createOnBoxDropFunctionMedium3,
   createOnBoxDropFunctionHard, createOnBoxDropFunctionHard2, createOnBoxDropFunctionHard3: functions that are called on the container that receives a drag event
  -createTransition: displays a congratulatory message and a reward after the completion of each mini-game, except for the last.
  -endOfLevelPage: displays a congratulatory message and a reward. This also lets the user go back to the "Choose Level" page, go to "See Farm" page, or continue to the next level.
  -endOfGamePage: displays a congratulatory message and a reward. This also lets the user go to "See Farm" page or go back to the "Choose Level" page.
  -seeFarm, seeFarmEasy, seeFarmMedium: display the current state of the farm. This page shows the rewards that the user got from the mini-games completed.

  Data Structure:
    -Question-Answer game: array of objects; each object consists of a question and its answer
    -Memory game: array of objects; each object consists of a name and an image source
    -Multiple choice: array of objects; each object is consists of a number, image, and options, which consist of objects of options for the questions
    -Matching game: array of strings that consist of the math problems and the name of the numbers, which are answers to the math problems
