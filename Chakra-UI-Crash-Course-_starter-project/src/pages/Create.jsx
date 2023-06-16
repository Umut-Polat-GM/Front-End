import { Box, FormControl, FormLabel, Input, FormHelperText, Textarea, Checkbox, Button } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW={"480px"}>
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a description task name.</FormHelperText>
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
          />
        </FormControl>

        <FormControl display={"flex"} alignItems={"center"} mb={"40px"}>
          <Checkbox name="isPriorty"  size={"lg"} colorScheme="purple"/>
          <FormLabel mb={"0"} ml={"10px"}>Is this task a priority?</FormLabel>
        </FormControl>
        <Button type="submit" >Submit</Button>
      </Form>
    </Box>
  );
}


export const createAction = async ({ request }) => ({
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(data);

  return redirect('/')
}
