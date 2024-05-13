import { Box, Container, Text, Link, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" width="full" py={5} backgroundColor="gray.200">
      <Container maxW="container.xl" centerContent>
        <Text fontSize="sm">© 2023 The Rock Legends. All rights reserved.</Text>
        <HStack spacing={4} mt={2}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} w={6} h={6} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
        </HStack>
        <Text fontSize="sm" mt={2}>
          <Link href="/privacy-policy" color="teal.500">Privacy Policy</Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;