// src/sections/About.tsx
import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

const About: React.FC = () => {
  return (
    <Box as="article"id="about" minH="100vh" p={8} rounded='md' boxShadow='md'  borderTopColor="#4709cd" borderTopWidth="4px" >
      <Heading color="#4709cd">About Me</Heading>
      <Divider mt={4} bg='#9F7AEA'/>
      <Box as="section">
        <Text mt={4}>
            I am currently pursuing a Bachelor of Engineering Science in Software Engineering at Western University. I have a strong foundation in algorithms, data structures, machine learning, and web technologies.
        </Text>
        <Text mt={4}>
            My coursework includes:
            <ul>
            <li>Algorithms and Data Structures</li>
            <li>Machine Learning</li>
            <li>Theoretical Foundations of Software Engineering</li>
            <li>Networking: Principles, Protocols, and Architecture</li>
            <li>Web Technologies</li>
            <li>Database Management Systems</li>
            </ul>
        </Text>
      </Box>
    </Box>
  );
};

export default About;
