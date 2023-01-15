import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ formData, setFormData, handleFormSubmit }) => {
  const onInputChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const onEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit({
      id: uuidv4(),
      name: formData.name,
      email: formData.email,
      completed: false,
    });
    resetFormData();
  };

  const resetFormData = () => {
    setFormData({ name: "", email: "" });
    document.getElementById("form").reset();
  };

  return (
    <>
      <form
        onSubmit={onFormSubmit}
        id="form"
        action=""
        className="d-flex justify-content-center align-items-center pb-5"
      >
        <input
          type="text"
          placeholder="Enter your Name"
          className="rounded m-1"
          value={formData.name}
          required
          onChange={onInputChange}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="rounded m-1"
          value={formData.email}
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
