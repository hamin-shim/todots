import { useRecoilValue, useSetRecoilState } from "recoil";
import { CategoryList, IToDo, todoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(todoState);
  const categoryList = useRecoilValue(CategoryList);
  const onClick = (newCategory: IToDo["category"]) => {
    setToDos((oldToDos) => {
      const targetIdx = oldToDos.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: newCategory };
      return [
        ...oldToDos.slice(0, targetIdx),
        newToDo,
        ...oldToDos.slice(targetIdx + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {categoryList.map(
        (each) =>
          category !== each.label && (
            <button onClick={() => onClick(each.label)}>→{each.label}</button>
          )
      )}
    </li>
  );
}
export default ToDo;
