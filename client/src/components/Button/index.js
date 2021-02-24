import React from 'react';
import "./index.css";

export default (props) => {
  return (
    <button
      className={`button${props.className ? " " + props.className : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}