import { useState } from "react";
import Trash from "../assets/trash";

type TodoType = {
  id: number;
  label: string;
  done: boolean;
};

const TodoList = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [listItems, setListItems] = useState<TodoType[]>([]);

  const handleAdd = () => {
    const newListItem = {
      id: listItems.length + 1,
      label: inputValue,
      done: false,
    };
    const newList = [...listItems, newListItem];
    setListItems(newList);
    setInputValue("");
  };

  const handleRemove = (id: number) => {
    const newListItems = listItems.filter((todoItem) => todoItem.id !== id);

    setListItems(newListItems);
  };

  const handleCheck = (id: number) => {
    const newList = listItems.map((listItem) => {
      if (listItem.id === id) {
        return { ...listItem, done: true };
      }
      return listItem;
    });
    setListItems(newList);
  };

  return (
    <div className="container">
      <h1>To-do List</h1>
      <div className="to-do">
        <div className="to-do__header">
          <h1 className="to-do__header__item">Todo List</h1>
          <h3 className="to-do__header__item">A Simple To-do List App</h3>
        </div>
        <div className="to-do__list">
          {listItems.map((todoItem: TodoType) => {
            return (
              <div key={todoItem.id} className="to-do__list__item">
                <div onClick={() => handleCheck(todoItem.id)}>
                  {todoItem.label}
                </div>
                <button onClick={() => handleRemove(todoItem.id)}>
                  <Trash />
                </button>
              </div>
            );
          })}
        </div>
        <div className="to-do__form">
          <label className="to-do__form__label" htmlFor="input">
            New To-do
          </label>
          <input
            id="input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="to-do__form__btn" onClick={() => handleAdd()}>
            Add To-do
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
