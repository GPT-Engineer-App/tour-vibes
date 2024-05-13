import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={5} height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="brand.900">
      <VStack spacing={8}>
        <Image src="https://via.placeholder.com/150?text=Rock+Band" alt="Band Logo" boxSize="150px" />
        <Heading as="h1" size="2xl" fontWeight="bold" color="brand.800">The Rock Legends</Heading>
        <Text fontSize="xl" textAlign="center">
          Join us on our world tour and experience the thrill of live music!
        </Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="red" variant="solid" size="lg" _hover={{ bg: "brand.700" }}>
          Buy Tickets
        </Button>
        <Button leftIcon={<FaMusic />} colorScheme="blue" variant="outline" size="lg" _hover={{ bg: "brand.800", color: "white" }}>
          Listen Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;