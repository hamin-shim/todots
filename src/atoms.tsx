import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  category: string;
  id: number;
}
export interface ICategoryList {
  label: string;
  id: number;
}
export const todoState = atom<IToDo[]>({
  key: "toDo",
  default: JSON.parse(localStorage.getItem("todos") || "[]"),
});
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(todoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});
export const categoryState = atom({
  key: "category",
  default: "Default",
});
export const CategoryList = atom<ICategoryList[]>({
  key: "categoryList",
  default: JSON.parse(
    localStorage.getItem("categories") || '[{"label":"Default", "id":0}]'
  ),
});
