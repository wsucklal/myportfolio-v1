import React from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import TypeWriterText from '../components/TypewritterText';
import SlideFadeSection from '../components/SlideFadeSection';

const Footer: React.FC = () => {
  return (
    <Box as="article"id="Footer" minH="60vh" p={8} bg="purple.400">
    <Box as='section'>
        <Stack
            textAlign="center"
            align="center"
        >
        <Heading as='h1'>What did I use to build this?</Heading>
        <Box as="section">
            <Text mt={4}>
                React.js
            </Text>
            <Text mt={4}>
                Typescript
            </Text>
            <Text mt={4}>
                ChakraUI
            </Text>
            <Text mt={4}>
                StoryBook
            </Text>

        </Box>
        <Text mt={4}>
                © 2023 - Warren Sucklal
            </Text>
        </Stack>
    </Box>
    </Box>
  );
};

export default Footer;
