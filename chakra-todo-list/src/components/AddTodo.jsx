import { Button, HStack, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { MainContext } from "../context";

function AddTodo() {
  const { addTodo } = useContext(MainContext);
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} >
      <HStack mb={"4"}>
        <Input
          variant={"filled"}
          placeholder="...add todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button colorScheme="pink" px={"8"} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
