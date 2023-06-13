import React from "react";
import { saveToDatabase } from "./../../utils/index";

const TodoForm = () => {
  const [title, setTitle] = React.useState();
  const [desc, setDesc] = React.useState();

  const submitHandler = (formEvent) => {
    formEvent.preventDefault();
    const newTask = {
      title,
      description: desc,
      date: new Date(),
      isDone: false,
    };
    console.log(newTask);
    saveToDatabase(newTask);
    formEvent.target.reset();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-lg min-w-md grid gap-4"
    >
      <div className="grid gap-1">
        <label htmlFor="title">Title:</label>
        <input
          className="border border-gray-300 border-solid"
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="description">Description:</label>
        <textarea
          className="border border-gray-300 border-solid"
          type="text"
          id="description"
          rows={5}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-900 text-white rounded p-2"
      >
        Create a new To Do
      </button>
    </form>
  );
};

export default TodoForm;
