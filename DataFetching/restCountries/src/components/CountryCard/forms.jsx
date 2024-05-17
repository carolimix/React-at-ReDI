import { useState } from "react";
import styles from "./Lesson15Exercises.module.css";

/**
 * Now it's your turn, make the form below a controlled form.
 * 1. Create the states for the form fields
 * 2. Create the onChange handlers for the form fields
 * 3. Update the form fields to be controlled
 * 4. Update the form submission to use the controlled form fields
 * 5. Set the submit button to be disabled if the terms are not agreed to
 */

const Lesson15exercise = () => {
  const fullWidthStyles = [styles.inputWrapper, styles.fullWidth].join(" ");

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
    terms: "",
  });

  const handleSubmit = (event) => {
    // This function is used to prevent the default form submission behavior
    event.preventDefault();
    const data = {
      ...formFields,
    };
    console.log("formFields", formFields);
    console.log("data", data);
  };

  const handleOnChange = (event) => {
    console.log("event", event.target.value);
    const inputKey = event.target.name;
    const inputValue = event.target.value;
    setFormFields((prevState) => {
      return { ...prevState, [inputKey]: inputValue };
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Contact form</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor='name'>Name:</label>

          <input
            type='text'
            id='name'
            name='name'
            value={formFields.name}
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor='email'>Email:</label>

          <input
            type='email'
            id='email'
            name='email'
            value={formFields.email}
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor='country'>Country:</label>

          <select
            id='country'
            name='country'
            value={formFields.country}
            onChange={handleOnChange}
          >
            <option value='USA'>USA</option>
            <option value='Canada'>Canada</option>
            <option value='Mexico'>Mexico</option>
          </select>
        </div>

        <div />

        <div className={fullWidthStyles}>
          <label htmlFor='message'>Message:</label>

          <textarea
            id='message'
            name='message'
            rows='4'
            value={formFields.message}
            onChange={handleOnChange}
          />
        </div>

        <div className={fullWidthStyles}>
          <legend>Do you agree to the terms?</legend>
          <label>
            <input
              type='radio'
              name='terms'
              checked={formFields.terms === "yes"}
              value='yes'
              onChange={handleOnChange}
            />
            Yes
          </label>
          <label>
            <input
              type='radio'
              name='terms'
              checked={formFields.terms === "no"}
              value='no'
              onChange={handleOnChange}
            />{" "}
            No
          </label>
        </div>

        <div className={fullWidthStyles}>
          <button
            className={styles.button}
            type='submit'
            disabled={formFields.terms === "no"}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Lesson15exercise;
