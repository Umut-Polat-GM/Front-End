import { ViewIcon, EditIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

function Dashboard() {
  const tasks = useLoaderData();

  return (
    <SimpleGrid p="10px" spacing={10} minChildWidth={"300px"}>
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop={".5rem"}
            borderColor={"purple.400"}
            bg={"white"}
          >
            <CardHeader>
              <Flex gap={3}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size={"dm"}>
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export default Dashboard;

export const taskLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};
