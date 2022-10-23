import { atom, selector } from "recoil";

// 코드상에서는 1,2,3 형식의 넘버로 표시됨 (개발자가 편히 사용할 수 있도록 알아서 지정해줌)
// "TO_DO" = "TO_DO"와 같은 형식으로 값을 변경할 수 있음
export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

// 카테고리 탭 상태
export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    // selector가 atom을 참조하고 있음
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
