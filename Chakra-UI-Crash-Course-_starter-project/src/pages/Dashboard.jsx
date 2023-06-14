import { SimpleGrid, Box } from '@chakra-ui/react'
import React from 'react'

function Dashboard() {
  return (
    <SimpleGrid p="10px" spacing={10} minChildWidth={"250px"}>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid">
        <Text>Hello</Text>
      </Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>

      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>

      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
      <Box bg={"white"} w={"200px"} h="200px" border="1px solid"></Box>
    </SimpleGrid>
  )
}

export default Dashboard
