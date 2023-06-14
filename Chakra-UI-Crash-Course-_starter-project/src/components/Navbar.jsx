import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <div>
      <Flex p={".4rem"} alignItems={"center"}>
        <Heading>Umut Task</Heading>
        <Spacer />
        <HStack spacing={"1.4rem"}>
          <Box bg={"gray.200"} p={".6rem"} borderRadius={"md"} fontWeight={"bold"}>M</Box>
          <Text>umut@bloblocom</Text>
          <Button colorScheme="purple">Logout</Button>
        </HStack>
      </Flex>

      {/* <Flex bg={'gray.200'} justify={`space-between`}>
        <Box w={`100px`} h={`100px`} bg={`yellow.200`}>1</Box>
        <Box w={`100px`} h={`100px`} bg={`blue.200`}>2</Box>
        <Box w={`100px`} h={`100px`} bg={`orange.200`} flexGrow={3}>3</Box>
        <Box w={`100px`} h={`100px`} bg={`red.200`} flexGrow={2}>4</Box>
        <Box w={`100px`} h={`100px`} bg={`purple.200`} flexGrow={1}>5</Box>
      </Flex> */}
    </div>
  );
}

export default Navbar;
