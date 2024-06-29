console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = `I used the getElementById("node1") method to access this`;


// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const nodes = document.getElementsByClassName("node2");
console.log(nodes);
nodes[0].textContent = `I used the getElementByClassName("node2") method to access this`;

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const texts = document.getElementsByTagName("h3");
console.log(texts)
for (let i = 0; i < texts.length; i++) {
  texts[i].textContent =  `I used the getElementByTagName("h3") method to access all of these`;
}



/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

// TODO: Append the created node to the parent node using the element.appendChild() method

//1. Create the thing
//2. Modify the thing
//3. Append the thing

const para1 = document.createElement("p");
para1.textContent = `This node was created using the createElement() method`
document.querySelector("#parent").append(para1);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
//1. create the anchor
const newAnchor = document.createElement("a")
//2. modify the anchor tag
newAnchor.textContent = `I am a <a> tag`;
//3. Append the anchor tag
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

//NEEDS -- parent tag, new tag thats being inserted, need to know the location(reference point)

document.querySelector("#parent").insertBefore(newAnchor, para1);

// BONUS: Add a link href to the <a>
newAnchor.href = "https://google.com";
//Make the link open in a new tab
newAnchor.target = "_blank";


/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newPara = document.createElement("p");
newPara.textContent = `New Child Node`;

//Grab the parent element
const container3 = document.querySelector("#exercise-container3");
//Grab the old element that we will replace
const n1 = document.querySelector("#N1");

// TODO: Remove the "New Child Node"
container3.replaceChild(newPara, n1);

// n1.replaceWith(newPara);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
const groceryUL = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let i = 0; i < list.length; i++){
  const newList = document.createElement("li");
  newList.textContent = list[i];
  // console.log(newList)
  groceryUL.append(newList);
}
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 
const container = document.querySelector("#container");
container.append(groceryUL)

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
 

function show() {
  //creates all the modal elements
  const modalContainer = document.createElement("div");
  const modalCard = document.createElement("div");
  const modalPara = document.createElement("p");

  //modify all the modal elements
  modalContainer.id = "modal";
  modalCard.classList.add("modal-card");
  modalPara.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  
  //append all the modal elements
  modalContainer.append(modalCard);
  modalCard.append(modalPara);
  //append the modal onto the webpage
  document.querySelector("main").append(modalContainer);

  const closeButton = document.createElement("button");
  closeButton.classList.add("closeBtn");
  closeButton.textContent = "Close"
  modalCard.append(closeButton);

  closeButton.addEventListener("click", () => {
    modalContainer.remove();
  })

  
}

const viewModalButton = document.querySelector("#btn");

// viewModalButton.addEventListener("click", () => {
//   show();
// })

viewModalButton.addEventListener("click", show);