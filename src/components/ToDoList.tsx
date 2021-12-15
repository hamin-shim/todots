import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CategoryList, categoryState, toDoSelector, todoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const AllTodo = useRecoilValue(todoState);
  const toDo = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const categoryList = useRecoilValue(CategoryList);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(AllTodo));
    localStorage.setItem("categories", JSON.stringify(categoryList));
  });
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        {categoryList.map((each) => {
          return <option value={each.label}>{each.label}</option>;
        })}
      </select>
      <CreateToDo />
      {toDo.map((one) => (
        <ToDo key={one.id} {...one} />
      ))}
    </div>
  );
}
export default ToDoList;
