import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="ToDo_style">
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          -
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
