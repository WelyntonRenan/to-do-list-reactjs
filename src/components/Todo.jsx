import React from "react";
import { useState } from "react";
import { MdOutlineDeleteOutline } from 'react-icons/md';

export default function Todo(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="taskList" onSubmit={handleSubmit}>
      <div className="Box">
        <label className="todo-label" htmlFor={props.id}>
          Editar {props.name} para:
        </label>
        <input
          id={props.id}
          className="inputEdit"
          type="text"
          value={newName}
          onChange={handleChange}
        />
        <div className="btnsEditTemplate">
          <button
            type="button"
            onClick={() => setEditing(false)}
          >
            Cancelar
          </button>
          <button type="submit">
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="taskList">
      <div className="Box">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
        <div className="btnEdit">
          <button type="button" className="buttonEdit" onClick={() => setEditing(true)}>
            Editar
          </button>
        </div>
      </div>
      <div className="Btns">
        <button
          type="button"
          className="buttonDelete"
          onClick={() => props.deleteTask(props.id)}
        >
          <i><MdOutlineDeleteOutline size={25} /></i>
        </button>
      </div>
    </div>
  );


  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}