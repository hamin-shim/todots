import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  category: categories;
  id: number;
}
export const todoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(todoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});
export const categoryState = atom<categories>({
  key: "category",
  default: "TO_DO",
});
type categories = "DONE" | "DOING" | "TO_DO";
