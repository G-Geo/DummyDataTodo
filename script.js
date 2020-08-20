let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]



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
      // created listItem
      let listItem = document.createElement("li"); 
      // get array item title
      const elementTitle = arrayOfTodos[index].title

      const elementComplete = arrayOfTodos[index].completed + "|"
      // created text to go inside <li> text </li>

      let listItemText2 = document.createTextNode(elementComplete)

      let listItemText = document.createTextNode(elementTitle); 
  
      // appended the text to the listItem
      listItem.appendChild(listItemText2)
      listItem.appendChild(listItemText);
  
      // append to <ol> <li> Hi there and greetings! </li> </ol>
      ol.appendChild(listItem)
    }
  }






// Recreated todo fetch, into post fetch

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
    for (let i = 0; i < testvariable.length; i++) {
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

 
 
 
 
 
 
 
 
 
 
