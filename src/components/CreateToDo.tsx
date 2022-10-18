import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        placeholder="write a to do"
        {...register("toDo", {
          required: "Please write a To Do",
        })}
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
