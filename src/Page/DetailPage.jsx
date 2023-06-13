import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteTask, editTask, toDoTaskKey } from "../utils";

const DetailPage = () => {
  const { date } = useParams();
  const [task, setTask] = React.useState();

  const [edit, setEdit] = React.useState(false);

  const [title, setTitle] = React.useState();
  const [desc, setDesc] = React.useState();

  useEffect(() => {
    if (localStorage.getItem(toDoTaskKey)) {
      const taskList = JSON.parse(localStorage.getItem(toDoTaskKey));
      taskList?.forEach((item) => {
        if (item.date === date) {
          setTask(item);
        }
      });
    }
  }, []);

  const deleteHandler = () => {
    deleteTask(date);
    window.location.href = "/";
  };

  const onSubmit = (formEvent) => {
    formEvent.preventDefault();
    editTask(date, title, desc);
    window.location.href = "/";
  };

  return (
    <div>
      {task ? (
        <>
          <h3>{task.title}</h3>
          {<p>{new Date(task.date).toISOString().split("T")[0]}</p>}
          <p>{task.description}</p>

          <button
            className="p-3 mx-4 bg-gray-300"
            onClick={deleteHandler}
          >
            Delete
          </button>
          <button
            className="p-3 mx-4 bg-gray-300"
            onClick={() => setEdit(!edit)}
          >
            {edit ? "Close Edit" : "Edit"}
          </button>
          {edit && (
            <form
              className="grid gap-2 p-8"
              onSubmit={onSubmit}
            >
              <input
                className="input"
                type="text"
                defaultValue={task.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="input"
                type="text"
                defaultValue={task.description}
                onChange={(e) => setDesc(e.target.value)}
              />
              <button type="submit">edit</button>
            </form>
          )}
        </>
      ) : (
        <p>Loading or Error Occured</p>
      )}
    </div>
  );
};

export default DetailPage;
