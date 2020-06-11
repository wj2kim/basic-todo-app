import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// initial data
const todoList = [
  {
    id: 1,
    text: 'Finish Writing a Blog',
    checked: true,
  },
  {
    id: 2,
    text: 'Practice on todo app',
    checked: false,
  },
  {
    id: 3,
    text: 'Start stucturing a web page',
    checked: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todoList);
  const nextId = useRef(4);

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    const newTodoList = [...todos, todo];
    setTodos(newTodoList);
    nextId.current += 1;
  };

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => id !== todo.id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <React.Fragment>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </React.Fragment>
  );
}

export default App;
