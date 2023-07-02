import React from 'react';
import './App.css'

// var todos = [
//   {
//     title: "go to gym",
//     description: "go to gym again",
//     id: 1
//   },
//   {
//     title: "go to gym",
//     description: "go to gym again",
//     id: 2
//   }
// ]

// let todo = {
//   title: "go to gym1111",
//   description: "go to gym11",
//   id: 1
// }

// var todoForToday = {
//   title: "go to gym",
//   description: "hit gym at 7",
//   id: 1
// }


var ctr = 0;

// our own customhook
// not very clear - looks as good as a function
// which the todos state variable hidden here
function useTodos() {
  const[todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodos(data);
      })
    })
  }, []);

  setInterval(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((response) => {
      response.json().then((data) => {
        console.log(data)
        setTodos(data);
      })
    })
  }, 5000)

  return todos;
}

function App() {

  const todos = useTodos();

  // anything which is a state variable gets initialized once
  // ,i.e useState(Math.random) gets called once only
  // it won't get called again and again as part of the re-render
  let [counter, setA] = React.useState(Math.random());
  var nonStateVariable = Math.random();


  // called only once. similar to useState
  // on subsequent re-renders, the code inside useEffect wont get called
  // again and again

//  console.log(todos)
 // console.log(counter)

  // will keep changing across renders since
  // this isnt a state variable
  //console.log(nonStateVariable)
  
  return (

    <div>
      {
        todos.map((todo) => {
          return <Todo title={todo.title} description={todo.description}></Todo>          
        })
      }
      <br></br>
      {counter}
      <br></br>
      {nonStateVariable}
    </div>
  )
}

function Todo(props) {
  return <div>
    {props.title}
    {props.description}
    <button>Delete todo</button>
  </div>
}

function HelloWorldComponent() {
  return <div>
    hello world guys
  </div>
}


export default App
