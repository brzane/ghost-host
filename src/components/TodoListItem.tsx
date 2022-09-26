import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
}) => {
  return (
    <li className={todo.completed ? "todo_row completed" : "todo_row"}>
      <label>
        <input
          type='checkbox'
          onChange={() => toggleComplete(todo)}
          checked={todo.completed}
        />
        {todo.title}
      </label>
      <button
        className='btn delete_btn'
        onClick={() => {
          onRemoveTodo(todo);
        }}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};
export default TodoListItem;
