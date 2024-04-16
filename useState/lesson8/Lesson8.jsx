import "./styles.css";
import { Fragment } from "react";
import { useState } from "react";

/**
 * INSTRUCTIONS:
 *
 * 1. Turn the input into a controlled component by adding a related component
 * state. [DOCS: https://bit.ly/3VXcaNI]
 * 2. Clicking the "SHOW" button should toggle the input text visibility, and
 * the button label should toggle between "SHOW" and "HIDE".
 * [DOCS: https://mzl.la/3Ue6HRy]
 * 3. Clicking the "CLEAR" button should clear the input. If the input is empty,
 * this button should be disabled.
 * 4. The warning message should only be displayed when the password is longer
 * than 10 characters.
 */

const Lesson8 = () => {
  const [typedText, setTypedTex] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleChange(e) {
    setTypedTex(e.target.value);
  }

  const clearValue = () => setTypedTex("");

  return (
    <Fragment>
      <div className='flex-container'>
        <input
          type={isVisible ? "password" : "text"}
          value={typedText}
          onChange={handleChange}
        />{" "}
        <button onClick={toggleVisibility}>
          {isVisible ? "SHOW" : "HIDE"}
        </button>
        <button onClick={clearValue} disabled={!typedText && true}>
          CLEAR
        </button>
      </div>
      {typedText.length > 10 && (
        <p className='warning'>🚨 Must be no more than 10 characters!</p>
      )}
    </Fragment>
  );
};

export default Lesson8;
