import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import nanoid from 'nanoid'

function AddTodo({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      id:nanoid(),
      body: content,
    }
  }

  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={"8"}>
        <Input
          variant={"filled"}
          placeholder="...add todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px={"8"} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
