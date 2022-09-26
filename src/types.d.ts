type AddTodo = (newTodo: string) => void;
type RemoveTodo = (todoToRemove: Todo) => void;

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type ToggleComplete = (selectedTodo: Todo) => void;
