import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }

  return (
    <Flex as={"nav"} p={"10px"} mb={"40px"} alignItems={"center"}>
      <Heading as={"h1"}>Umut Task</Heading>
      <Spacer />
      <HStack spacing={"20px"}>
        <Avatar name="mario" src={"./img/mario.png"} bg={"purple.400"}/>
        <Text>umut@bloblocom</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
