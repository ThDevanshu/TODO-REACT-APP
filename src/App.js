import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, {useState} from 'react';


function App() {
const onDelete = (todo)=>{
  console.log("I'm on Delete of todo", todo);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
}
  localStorage.getItem("myTodo")
  const addTodo = (title, desc)=>{
    console.log("I am adding this Todo", title, desc)
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      let sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]); 
    console.log(myTodo);
  }



  const [todos, setTodos] = useState([
    {
      sno : 1,
      title: "Go to the market",
      desc: "You need to go to market to get this job done1"
    },
    {
      sno : 2,
      title: "Go to the mall",
      desc: "You need to go to market to get this job done2"
    },
    {
      sno : 3,
      title: "Go to the shop",
      desc: "You need to go to market to get this job done3"
    },
  ])
  return (
    <>
    <Header title="My Todos List"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    </> 
  );
  }

export default App;

