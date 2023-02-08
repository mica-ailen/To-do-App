import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return todos.map((todo) => {
    //the key allows react to only rerender or change the components that actually change inside of our array in stead of rerendering all of them every single time
    return <Todo key={todo.id} todo={todo} />;
  });
}
