import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="taskInput">
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">
          Adicionar
        </button>
      </div>
    </form>
  );
}

export default Form;