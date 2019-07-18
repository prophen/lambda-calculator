import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials);

  return (
    <div>
      {specialsState.map((text, index) => (
        <SpecialButton text={text} key={index} />
      ))}
    </div>
  );
};

export default Specials;
