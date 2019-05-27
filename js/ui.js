/*
  This function creates a paragraph element.
  It accepts a text, which will be the content of the paragraph, and a class name that will be assigned to it.
  This function will be called on the parts of the game where text is needed such as instructions.
  It will return a paragraph element.
*/
function createParagraph(text, className){
  var p = document.createElement("P");

  //assign the classname if not assigned yet
  if (typeof className !== 'undefined'){
    p.classList.add(className);
  }
  document.body.appendChild(p);
  var t = document.createTextNode(text);
  p.appendChild(t);

  return p;
}

/*
  This function creates a h1 element.
  It accepts a text, which will be the content of the heading.
  This function will be called in creating the title of the game.
  It will return an h1 element.
*/
function createHeadings(headingText){
  var heading = document.createElement("H1");
  document.body.appendChild(heading);
  var t = document.createTextNode(headingText);
  heading.appendChild(t);

  return heading;
}

/*
  This function creates a div element.
  This function will be called whenever other html elements such as images and texts need a container.
  It will return a div element.
*/
function createDiv(){
  var d = document.createElement("DIV");
  document.body.appendChild(d);

  return d;
}


/*
  This function creates a button element.
  It accepts a text, which will be the text that will be displayed on the button.
  This function will be called in creating buttons for the game.
  It will return an button element.
*/
function createButton(buttonText){
  var b = document.createElement("BUTTON");
  var t = document.createTextNode(buttonText);
  b.appendChild(t);
  document.body.appendChild(b);

  return b;
}

/*
  This function creates a text input element.
  This function will be called in creating text inputs for the users.
  It will return a text input element.
*/
function createTextInput(){
  var tB = document.createElement("INPUT");
  document.body.appendChild(tB);
  tB.setAttribute("type", "text");

  return tB;
}

/*
  This function creates a radio element.
  It accepts a text, which will be the name of the radio.
  This function will be called in creating radio buttons for the options in the multiple choice game.
  It will return a radio element.
*/
function createRadioButtons(name){
  var rB = document.createElement("INPUT");
  document.body.appendChild(rB);
  rB.setAttribute("type", "radio");
  rB.setAttribute("name", name);

  return rB;
}


/*
  This function creates an image element.
  It accepts a text, which will be the source of the image file.
  This function will be called in creating the images of the game.
  It will return an image element.
*/
function createImage(source){
  var img = document.createElement("IMG");
  img.src = source;
  document.body.appendChild(img);

  return img;
}

/*
  This function creates a section element.
  This function will be called in creating the cards for the memory game.
  It will return a section element.
*/
function createSection(){
  var sec = document.createElement("SECTION");
  document.body.appendChild(sec);

  return sec;
}

/*
  This function creates a label element.
  This function will be called in creating labels for the radio buttons.
  It is used in creating the options for the multiple choice game.
  It will return a label element.
*/
function createLabel(){
  var label = document.createElement("LABEL");
  document.body.appendChild(label);

  return label;
}
