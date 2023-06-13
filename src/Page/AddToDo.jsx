import NavBar from "../components/NavBar";
import TodoForm from "../components/forms/todo";

const AddToDo = () => {
  return (
    <div className="grid gap-4">
      <NavBar />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">AddToDo</h2>
        <TodoForm />
      </div>
    </div>
  );
};

export default AddToDo;
