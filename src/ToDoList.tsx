import React, { useState } from "react";
import { useForm } from "react-hook-form";
interface IForm {
  toDo: string;
}
function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>({});
  const onValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <span>{errors?.toDo?.message}</span>
        <button>add</button>
      </form>
    </div>
  );
}
export default ToDoList;

// const [toDo, setToDo] = useState("");
// const [todoError, setTodoError] = useState("");
// const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//   const {
//     currentTarget: { value },
//   } = event;
//   setToDo(value);
//   setTodoError("");
// };
// const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   console.log(toDo);
//   if (toDo.length < 10) {
//     return setTodoError("To do Should be longer");
//   } else {
//     console.log("submit");
//   }
// };
// return (
//   <div>
//     <form onSubmit={onSubmit}>
//       <input onChange={onChange} value={toDo} placeholder="write a todo" />
//       <button>Add</button>
//       {todoError !== "" ? todoError : null}
//     </form>
//   </div>
// );
