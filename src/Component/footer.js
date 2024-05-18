import { Box, Flex, Text, Link} from '@chakra-ui/react';
// import { Link} from 'react-router-dom';

const Footer = () => {
    return (
      <Box as="footer" bg="gray.200" py="4" position="fixed" bottom="0" width="100%" >
        <Flex justify="center" align="center" >
          <Text fontSize="sm" mr="2">
            © 2024 GitHub Repo
          </Text>
          <Link href="/about" fontSize="sm" ml="1" mr="1">
            About Us
          </Link>
          <Link href="/contact" fontSize="sm" >
            Contact Us
          </Link>
        </Flex>
      </Box>
    );
  };
  export default Footer;  