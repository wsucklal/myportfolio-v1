import React from 'react';
import { Box, Button, Flex, Heading, Stack, Text, Image} from '@chakra-ui/react';
import TypeWriterText from '../components/TypewritterText';

const Home: React.FC = () => {

  return (
    <Box as="article"id="home" minH="100vh" p={8} boxShadow="xl">
      <Box as="section">
        {/* <Heading as="h1" size="2xl">
          <TypeWriterText>
          Welcome to My Portfolio
          </TypeWriterText>
        </Heading> */}
             <Flex
        align="center"
        justify="center"
        height="100vh"
        bgGradient="linear(to-r, purple.400, teal.400)"
      >
        <Stack
          spacing={6}
          textAlign="center"
          align="center"
          p={8}
          bg="transparent"
          borderRadius="lg"
        >          
          <Image
          objectFit='cover'
          boxSize='max-content'
          src='https://media.licdn.com/dms/image/C5603AQFgU7JukkXBbw/profile-displayphoto-shrink_200_200/0/1609145713918?e=1727308800&v=beta&t=Lh0jZMfRNS1BwcrAJtxvVpQ2Uqee3rIXOstqjVc5JGQ' alt='Warren Sucklal' />
        <Heading as="h1" size="2xl">
          {/* <TypeWriterText>
          Welcome to My Portfolio
          </TypeWriterText> */}
            Welcome to My Portfolio
        </Heading>
          <Text fontSize="xl" mt={4}
          >
            Hi, I'm Warren Sucklal, a passionate software developer with experience in various technologies including React, Angular, TypeScript, and more.
          </Text>
          <Button
            size="lg"
            colorScheme="purple"
            variant="solid"
            onClick={() => alert("Contact me!")}
          >
            Contact Me
          </Button>
        </Stack>
      </Flex>
        </Box>
    </Box>
  );
};

export default Home;
