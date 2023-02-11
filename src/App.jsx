import { useState } from "react";
import "./App.css";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <>
      <div className="card-to-do">
        <h1>EL ARTE DEL BUEN DORMIR</h1>
        <br />
        <br />
        <div className="add-todo">
          <h3>¡Practica pequeños hábitos y consigue grandes resultados!</h3>
          <br />
          <br />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
        <br />
        <img
          id="iconos"
          src="https://cdn-icons-png.flaticon.com/512/6347/6347615.png"
          alt=""
          srcset=""
        />
      </div>
    </>
  );
}

export default App;
