let arrayOfTodos = []


//test change background color function




//END OF TEST

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {

    // access the ol tag to insert list items

    let ol = document.getElementById('todo-list')
  
    // loop through array to populate dom with each items title
    for (let index = 0; index <= 19; index++) {

      // listItem creator
      let listItem = document.createElement("li"); 

      // get array item title
      const grabElementTitle = arrayOfTodos[index].title

      const grabElementComplete = " | complete: "+ arrayOfTodos[index].completed
      
      // created text to go inside <li> text </li>

      let listItemText2 = document.createTextNode(grabElementComplete)

      let listItemText = document.createTextNode(grabElementTitle); 
  
      // appended the text to the listItem
      
      listItem.appendChild(listItemText)
      listItem.appendChild(listItemText2)
     ;

      // append to <ol> <li> Hi there and greetings! </li> </ol>
      listItem.setAttribute("id","liid")
      ol.appendChild(listItem)

      var isComplete = arrayOfTodos[index].completed;

      for (let index = 0; index < 20; index++) {
     
         if (isComplete){
           (listItem.style.backgroundColor = "#66BB55")
        }
        else{
         (listItem.style.backgroundColor = "#FF0120")
        }
     }
    }  
  }




//trying to change bg color here          THIS DOES NOT WORK

    // for (let i=0;i=ol.length;i++) {
    //       // if (listItem == false){
    //       //   listItem.style.backgroundColor = "#FF0000"
    //       // }
    //       console.log("check")
    //     }



    
// scan for completed             THIS DOES NOT WORK
// let testvariableforli = document.getElementById("liid");

// let oltestvariable = document.getElementById("todo-list")


// let scanforCompleted = () => {

//   for (let i = 0; i < 20;i++) {
//     if (testvariableforli.includes('false')){
//       testvariableforli.style.backgroundColor = "#FF0000"
//     }
//   }
// }


// reset button


// This one works
let ResetTodos = () => {
  for (let i=0; i < 20; i++){
  var myobj = document.getElementById("liid");
  myobj.remove();}
}

//FAILED RESET BUTTON ATTEMPTS 

// Removes all ID's, but also removes OL and can't repopulate
// let ResetTodos = () => {
//   var myobj = document.getElementById("todo-list");
//   myobj.remove();}

// Removes 1 LI at a time
// let ResetTodos = () =>{
//   var myobj = document.querySelector('li');
//   myobj.remove();}






//The Specifications/Specs
// Create a list of todos using the 200 todos retrieved from JSON Placeholder.
// Fetch Todos - sends request for data
// Log Todos - Logs the todos to the console
// Populate Todos - lists all of the todos for the user to see in the window.
// Make the text appear red if the completed property equals false. Set it to another color if it equals true.
// Center and style your todo list.
// Push Yourself Further
// Only display 20 todos at a time.
// Create a button for each item that would mark it as done.
// Connect that "done" button to a function that uses this to change its completed property to true.
// Read the JSON Placeholder API to see if you can build an image gallery using their dummy images!




// Fetches Posts (rather than Todos)

let testvariable = 
  {
  
  }

  const fetchvariable = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response2) => response2.json())
    .then( (json) => testvariable = json)
  
  }

  const logthis = () => {
    console.log(testvariable)
  }

  const testpopulate = () => {

      // access the ol tag to insert list items
    let testol= document.getElementById('test-list')
      // loop through array to populate dom with each items title
    for (let i = 0; i < 20; i++) {
      let createli = document.createElement("li");

      const fetchlistitems = testvariable[i].title

      let listitems = document.createTextNode(fetchlistitems);

      createli.appendChild(listitems);

      testol.appendChild(createli)
    }
      // created listItem

      // get array item title

      // created text to go inside <li> text </li>

      // appended the text to the listItem

      // append to <ol> <li> Hi there and greetings! </li> </ol>
  }

 
 
 
 
 
 
 
 
 
 
  // The Specifications/Specs
  // Create and clone a new repo called: "Todo-Filtering".
  // Fetch the same data.
  // Store the data in a variable.
  // Add an input to take in a number from 1 - 10
  // Add a button that when clicked will:
  // Clear the previous todos
  // Populate it with only todos with the userID that matches the number inputted
  // Store the currently filtered todos in a variable
  // So that you can create two more buttons that when clicked:
  // Removes those todos
  // Shows only todos that are either:
  // completed
  // not completed
  // HINT 1: Copy/paste your code from last class to get started faster.
  
  // HINT 2: When you're removing and repopulating, remember that you're removing them from the DOM and not the array.
  
  // HINT 3: Take these tasks one at a time.
  
  // Push Yourself Further
  // Build another column for Complete todos.
  // Sort the todos on just one click,
  // Show only the selected userID's todos
  // Display the Completed todos in one column
  // Display the incomplete todos in another