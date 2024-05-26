import { Container, Text, VStack, Box, useColorModeValue } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("green.100", "green.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={0} centerContent>
      <Box
        bgImage="url('https://i.imgur.com/6IUbEM0.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={8} p={8} bg="rgba(255, 255, 255, 0.8)" borderRadius="lg">
          <FaLeaf size="3em" color="#4A5568" />
          <Text fontSize="4xl" fontWeight="bold" color={textColor}>
            Welcome to Nature Walks
          </Text>
          <Text fontSize="xl" color={textColor}>
            Explore the beauty of nature
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;