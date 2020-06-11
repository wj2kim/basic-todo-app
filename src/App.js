import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <React.Fragment>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </React.Fragment>
  );
}

export default App;
