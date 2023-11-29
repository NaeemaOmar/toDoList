// .trim(): removes white space from the beginning and end of a script

let parentDiv = document.querySelector('#items')
let inputText = document.querySelector('[data-input]');
let addBtn = document.querySelector('#addBtn')
let taskCounter = 0;
let array = [];

function ObjectFeatures(id, name, dateCreated, completed){
    this.id = id;
    this.name = name;
    this.dateCreated = dateCreated;
    this.completed = completed;
}


// the newListItem() fx creates a new paragrapg tag when i click the add button. Now, I need to create a new fx that adds a div with a checkBox, a p tag and a button in one go
// function newParagraphTag(){
//     newParagraph = document.createElement('p');
//     newParagraph.textContent = "Please work";
//     parentDiv.appendChild(newParagraph);
// }

addBtn.addEventListener('click', ()=> newTaskDiv())

// function to add a new div containing a checkbox, p-tag and button each time a button is clicked
function newTaskDiv(){
    // create div holding the 3 items
    newDiv = document.createElement('div');
    // item1 = checkbox
    newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    // item2 = p tag
    newParagraphTag = document.createElement('p');
    // Assign input text to the p tag
    newParagraphTag.textContent = inputText.value;
    // item3 = button
    newButton = document.createElement('button');
    newButton.textContent = "Delete"
    // append the 3 items to the new div
    newDiv.appendChild(newCheckBox);
    newDiv.appendChild(newParagraphTag);
    newDiv.appendChild(newButton);
    // append the new div to the original html div
    parentDiv.appendChild(newDiv)
    // Applying a fx to the checkBox
}

function checkBoxTicked(a){
    if (a.checked){
        // Q: how do you style a html tag using JS? A: use .style (see eg)
        document.querySelector('p').style.textDecoration = 'line-through';
    } else {
        document.querySelector('p').style.textDecoration = 'none';
    }
}

function deleteItems(){
    
}



// function addingItem(a){
//     taskCounter++
//     NewObj(taskCounter, "item 1", datefx(), false)
// }

// Initialize variables to be used
// create fx that takes the input txt
// create a constructor/factory fx to create an object w/ the 4 ft's needed: will be used later to sort the name alphabetically
// creates a new div w/ a checkbox, a p-tag and the delete button

// JSON = JS object notation. Allows us to store objects (incl arrays) on our browser. 
// Local storage stores data in your computer browser as long as your computer is on
// Session storage is the same as the local but only lasts as long as your browser is open