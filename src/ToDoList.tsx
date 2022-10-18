import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
  todo2: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {},
  });
  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          placeholder="write a to do"
          {...register("todo", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
        />
        <span>{errors?.todo?.message}</span>
        <input
          placeholder="write a to do"
          {...register("todo2", {
            required: true,
            minLength: {
              value: 5,
              message: "Your input is too short.",
            },
          })}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
