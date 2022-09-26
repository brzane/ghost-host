import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./todo.css";
import { Container, Row } from "react-bootstrap";

interface TodoProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  addTodo: AddTodo;
}
const TodoApp: React.FC<TodoProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  addTodo,
}) => {
  return (
    <section className='todo_app'>
      <Container>
        <Row>
          <h1>Todo App</h1>

          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            onRemoveTodo={onRemoveTodo}
          />
        </Row>
      </Container>
    </section>
  );
};

export default TodoApp;
