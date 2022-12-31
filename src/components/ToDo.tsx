import React from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { IToDo, toDoState, categories } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const [categoryList, setCategoryList] = useRecoilState(categories);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {categoryList.map((el, index) => {
        if (category !== el) {
          return (
            <button key={`${index}-el-btn`} name={el} onClick={onClick}>
              {el}
            </button>
          );
        }
      })}
    </li>
  );
}

export default ToDo;
