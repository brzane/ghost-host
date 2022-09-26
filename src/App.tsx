import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Domain from "./components/Domain";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import MainNav from "./components/MainNav";
import Tesimonials from "./components/Tesimonials";
import TodoApp from "./components/TodoApp";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    const getTodos = async () => {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=4`
      );
      let responseTodos = res.data;
      setTodos(responseTodos);
    };
    getTodos();
  }, []);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = async (newTodo) => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newTodo
    );
    console.log(res);
    if (newTodo !== "") {
      setTodos([
        { id: Date.now(), title: newTodo, completed: false },
        ...todos,
      ]);
    }
  };

  const removeTodo: RemoveTodo = async (todoToRemove) => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${todoToRemove.id}`
    );
    console.log(res);
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.title != todoToRemove.title
    );

    setTodos(updatedTodos);
  };

  return (
    <div className='App'>
      <MainNav />
      <Hero />
      <Register />
      <Domain />
      <Pricing />
      <Tesimonials />
      <Services />
      <TodoApp
        todos={todos}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
        addTodo={addTodo}
      />
      <Footer />
    </div>
  );
}

export default App;
