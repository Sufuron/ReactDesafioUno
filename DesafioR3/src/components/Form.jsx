import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ email, setEmail, input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: uuidv4(), name: input, email, completed: false },
    ]);
    setInput("");
    setEmail("");
  };

  return (
    <>
      <form
        onSubmit={onFormSubmit}
        action=""
        className="d-flex justify-content-center align-items-center pb-5"
      >
        <input
          type="text"
          placeholder="Enter your Name"
          className="rounded m-1"
          value={input}
          required
          onChange={onInputChange}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="rounded m-1"
          value={email}
          required
          onChange={onEmailChange}
        />
        <button
          className="rounded btn btn-outline-secondary text-decoration-none text-white m-1"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
