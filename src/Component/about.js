import { Box, Container, Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <div>
      <Center>
        <Box boxSize="lg" mt="3rem"  p={4} border="1px solid #ccc" borderRadius="10px" bg="white" h='30rem'>
          <Center>
            <img
              width={200}
              src={require("./image/download.png")}
              alt="Description"
            />
          </Center>
          <Center><Heading>Emmanuel Jonathan</Heading></Center>
          <Container mt="1rem" textAlign='Center'>
            Hello there! I'm a committed Full Stack Developer
            with extensive experience in crafting scalable and adaptable web
            applications. I excel in transforming intricate challenges into
            straightforward, effective, and user-friendly solutions. I
            specialize in JavaScript (React.js/Vue.js) for frontend development
            and Node.js (Express.js) for backend services. I also have hands-on
            experience with relational and nonrelational databases such as
            MongoDB, and MySQL.
          </Container>
        </Box>
      </Center>
    </div>
  );
};

export default About;
