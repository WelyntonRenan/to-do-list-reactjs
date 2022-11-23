import React from "react";

export default function FilterButton(props) {
  return (
    <button
      type="button"
      className="btnFilter"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
}
