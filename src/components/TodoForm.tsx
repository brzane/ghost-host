import React, { useState, ChangeEvent, FormEvent } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className='todo_form'>
      <input
        type='text'
        value={newTodo}
        className='todo_input'
        placeholder='Add a todo'
        onChange={handleChange}
        required
      />
      <button type='submit' className='todo_button' onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
