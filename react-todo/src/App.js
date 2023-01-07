import Sections from "./components/sections";
import Info from "./components/info";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || ["umut", "Polat"])

  return (
    <div className="umut">
      <Sections 
        todos={todos}
        setTodos={setTodos}
      />
      <Info />
    </div>
  );
}

export default App;
