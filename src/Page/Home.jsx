import React from "react";
import Card from "../components/Card";
import TodoForm from "../components/forms/todo";
import { toDoTaskKey } from "../utils";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const [data, setData] = React.useState(
    JSON.parse(localStorage.getItem(toDoTaskKey)) ?? []
  );
  return (
    <>
      <NavBar />
      <div className="grid gap-4 m-8">
        <h3 className="text-center text-3xl">Task List</h3>
        {data?.map((item) => (
          <Card
            key={item.date}
            title={item.title}
            description={item.description}
            date={item.date}
            isDone={item.isDone}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
