import React from "react";
import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import FilterButtons from "./components/FilterButtons";
import Todo from "./components/Todo";
import { AiFillGithub } from 'react-icons/ai';


export default function App() {

  const DATA = [];
  const [tasks, setTasks] = useState(DATA);
  const [filter, setFilter] = useState('Todos');

  const filterMap = {
    Todos: () => true,
    Pendentes: (task) => !task.completed,
    Concluidos: (task) => task.completed
  };

  const filterName = Object.keys(filterMap);

  const filterList = filterName.map((name) => (
    <FilterButtons
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
    .filter(filterMap[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  function addTask(name) {
    const newTask = { id: `${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const deleted = tasks.filter((task) => id !== task.id);
    setTasks(deleted);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <a className="link" href="https://github.com/WelyntonRenan"> <i><AiFillGithub size={10} /></i> Github.com/WelyntonRenan </a>
      <Form addTask={addTask} />
      <div>
        {filterList}
      </div>
      <ul className="allTasks" >
        <li>
          {taskList.length > 0 || filter === 'Todos' ? taskList : <p>Você não possui tarefas em {filter}</p>}
        </li>
      </ul>
    </div>
  );
}

