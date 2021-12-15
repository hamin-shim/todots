import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
interface IForm {
  toDo: string;
}
const todoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
interface IToDo {
  text: string;
  category: "DONE" | "DOING" | "TO_DO";
  id: number;
}
function ToDoList() {
  // const value = useRecoilValue(todoState);
  // const modFn = useSetRecoilState(todoState);
  const [toDos, setToDos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>({});
  const onValid = ({ toDo }: IForm) => {
    console.log("add to do", toDo);
    setToDos((oldToDos) => [
      { text: toDo, category: "TO_DO", id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: "Please write a to do",
          })}
          placeholder="Write a to do"
        />
        <button>add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
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
