import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
      todoDate : '01/01/2004',
      todotime : '00:00:00',
     },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo ) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoContextProvider = TodoContext.Provider;
