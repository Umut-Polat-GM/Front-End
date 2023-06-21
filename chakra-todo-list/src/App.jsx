import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import { MainContext } from "./context";

function App() {
  const initialTodos = [
    {
      id: 1,
      body: "get bread",
    },
    {
      id: 2,
      body: "get butter",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  const data = {
    todos,
    setTodos,
    deleteTodo,
    addTodo,
  };

  return (
    <MainContext.Provider value={data}>
      <VStack p={4}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Heading
          mb={8}
          fontWeight={"extrabold"}
          size={"2xl"}
          bgGradient={"linear(to-r, pink.500, pink.300, blue.500)"}
          bgClip={"text"}
        >
          Chakra UI Todo List
        </Heading>
        <AddTodo />
        <TodoList />
      </VStack>
    </MainContext.Provider>
  );
}

export default App;
