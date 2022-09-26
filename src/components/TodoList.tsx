import React from "react";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.title}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
