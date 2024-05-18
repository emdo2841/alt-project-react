import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { IconButton, Icon } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Import icons from react-icons library
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

function ContactPage() {
  return (
    <Center>
      
      <Box
        p={4}
        mt="5rem"
        border="1px solid #ccc"
        borderRadius="10px"
        bg="white"
        size='2xl'
      >
        <center>
        
          <Heading>Contact Us</Heading>
        </center>
        <Text fontSize="xl" mt={4}>
          You can reach us through the following methods:
        </Text>
        <Text mt={3} fontSize='xl'>
          {" "}
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="Send email"
            icon={<EmailIcon />}
          />
          <br></br>
          <a href="mailto:emmanueljonathan113@gmail.com.com">
            emmanueljonathan113@gmail.com.com
          </a>
        </Text>
        <Text mt={3} fontSize='xl'>
          {" "}
          <IconButton
            colorScheme="teal"
            aria-label="Call Emmanuel"
            size="md"
            icon={<PhoneIcon />}
          />
          <br></br> <a href="tel:+2347053422577">+2347053422577</a>
        </Text>
        <Text size="lg">
          {" "}
          <b>Address:</b> <br></br>29 Hakimi Musa Road Madalla, Abuja, Nigeria
        </Text>
         {/* Social media icons and links */}
         <Center>
         <Box mt={4}>
          <IconButton
            as="a"
            href="https://www.facebook.com/yourpage"
            target="_blank"
            aria-label="Facebook"
            icon={<Icon as={FaFacebook} boxSize={8} color="teal" />}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/emmanuel-jonathan"
            target="_blank"
            aria-label="LinkedIn"
            icon={<Icon as={FaLinkedin} boxSize={8} color="teal" />}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/skyfazee"
            target="_blank"
            aria-label="Instagram"
            icon={<Icon as={FaInstagram} boxSize={8} color="teal" />}
          />
          {/* Add more icons and links for other platforms */}
          <IconButton
            as="a"
            href="https://www.xprofile.com/mdomajone"
            target="_blank"
            aria-label="X"
            icon={<Icon as={ FaTwitter } boxSize={8} color="teal" />}
          /> 
        </Box>
        </Center>
      </Box>
    </Center>
  );
}

export default ContactPage;
