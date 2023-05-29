import { useState } from "react";
import Trash from "../assets/trash";

type TodoType = {
  done: boolean;
  id: number;
  label: string;
};

const TodoList = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [listItems, setListItems] = useState<TodoType[]>([]);

  const handleAdd = () => {
    if (inputValue === "") {
      return;
    }
    const newListItem = {
      done: false,
      id: listItems.length + 1,
      label: inputValue,
    };
    const newList = [...listItems, newListItem];
    setListItems(newList);
    setInputValue("");
  };

  const handleRemove = (id: number) => {
    const newListItems = listItems.filter((listItem) => listItem.id !== id);

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
      <h1>To-Do List</h1>
      <div className="to-do">
        <header className="to-do__header">
          <h1 className="to-do__header__title">To-Do List</h1>
          <h3 className="to-do__header__subtitle">A Simple To-Do List App</h3>
        </header>
        <main className="to-do__list">
          {listItems.map((listItem: TodoType) => {
            return (
              <div
                className={`to-do__list__item ${
                  listItem.done ? "finished" : ""
                }`}
                key={listItem.id}
              >
                <div
                  className="to-do__list__item__label"
                  onClick={() => handleCheck(listItem.id)}
                >
                  {listItem.label}
                </div>
                <button
                  className="to-do__list__btn"
                  onClick={() => handleRemove(listItem.id)}
                >
                  <Trash />
                </button>
              </div>
            );
          })}
        </main>
        <div className="to-do__form">
          <label className="to-do__form__label" htmlFor="input">
            New To-Do Task
          </label>
          <input
            id="input"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleAdd();
              }
            }}
            type="text"
            value={inputValue}
          />
          <button className="to-do__form__btn" onClick={() => handleAdd()}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
