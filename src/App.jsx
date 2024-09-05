import "./App.css";
import {useState} from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1, //if length is 0 set id to 1, else set it to length - 1
      taskName: newTask
    }
    task.taskName!=="" && setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => {
      return task.id !== id;
    }))
  }

  const clearAll = () => {
    setTodoList([]);
  }

  return (
    <div className="App">
      <div className="title">
        To-Do List
      </div>
      <div className="addTask">
        <input className ="input" placeholder="Add your item" onChange={handleChange}/>
        <button className = "addTaskbutton" onClick={addTask}> + </button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return task.taskName !== "" && <div className="list">
          <div className="itemsinlist">• {task.taskName}
          <div className="output">
            <button className="deleteButton" onClick={() => deleteTask(task.id)}>✓</button>
          </div>
          </div> 
          </div>
        })}
      </div>
      <div>
        <button className="clearbutton" onClick={clearAll}>clear all ({todoList.length})</button>
      </div>
    </div>
  )
}

