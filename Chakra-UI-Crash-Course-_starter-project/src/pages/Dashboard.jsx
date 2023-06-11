import { Container, Heading, Text, Box } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyle = {
    p:".5rem",
    color:"red",
    bg:"blue.300",
    textAlign:"center",
    borderRadius:"md",
    filter:"drop-shadow(0 0 0.5rem blue)",
    transeition:"all .5s ease",
    _hover:{
      bg:"yellow.400",
      color:"black",
    }
  }

  return (
    <Container as={"section"} maxWidth={"4xl"} py={"1rem"}>
      <Heading my="2rem" p=".5rem">Chakra UI Components</Heading>
      <Text marginLeft="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatem.</Text>
      <Text ml="1rem" color={"blue.300"} fontWeight={"bold"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatem.</Text>

      <Box my={"2rem"} bg={"orange.300"} p={"1rem"}>
        <Text color={"black"}>Lorem ipsum dolor sit amet.</Text>
      </Box>
      <Box sx={boxStyle}>
        <Text> Hello Umut</Text>
      </Box>
    </Container>
  )
}
