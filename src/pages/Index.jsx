import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={5} height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Image src="https://via.placeholder.com/150" alt="Band Logo" boxSize="150px" />
        <Heading as="h1" size="2xl" fontWeight="bold">The Rock Legends</Heading>
        <Text fontSize="xl" textAlign="center">
          Join us on our world tour and experience the thrill of live music!
        </Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid" size="lg">
          Buy Tickets
        </Button>
        <Button leftIcon={<FaMusic />} colorScheme="gray" variant="outline" size="lg">
          Listen Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;