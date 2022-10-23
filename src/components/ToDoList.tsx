import { useRecoilValue } from "recoil";

// atoms
import { toDoSelector } from "../atoms";

// components
import CategorySelect from "./CategorySelect";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

// jsx
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <div>
      <CategorySelect />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
