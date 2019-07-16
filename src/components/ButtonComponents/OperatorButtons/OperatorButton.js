import React from "react";

const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {console.log(props)}
      <button>{props.text.char}</button>
    </>
  );
};

export default OperatorButton;
