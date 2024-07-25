// src/sections/Experience.tsx
import React from 'react';
import { Box, Heading, Text, Stack, Divider } from '@chakra-ui/react';

const Experience: React.FC = () => {
  return (
    <Box as="article"id="experience" minH="100vh" p={8} rounded='md' boxShadow='lg'  borderTopColor="#4709cd" borderTopWidth="4px">
      <Heading color='#4709cd'>Professional Experience</Heading>
      <Divider mt={4} bg='#9F7AEA'/>
      <Box as="section">
            <Stack spacing={4} mt={4}>
                <Box>
                <Heading size="md">Price Waterhouse Cooper</Heading>
                <Text>Software Engineering Intern (2022 - 2023)</Text>
                <Text mt={2}>
                    Successfully problem-solved solutions for multi-million dollar projects including client-facing platforms and portfolio reporting tools.
                </Text>
                <Text mt={2}>
                    Technologies used: TypeScript, Angular, C#, Azure.
                </Text>
                </Box>
                <Box>
                <Heading size="md">Manulife</Heading>
                <Text>Co-op Software Developer (Summer 2021)</Text>
                <Text mt={2}>
                    Developed an original website using ASP.NET to collect, display, and administer requested initiatives for the business.
                </Text>
                <Text mt={2}>
                    Technologies used: ASP.NET, MS SQL, Agile.
                </Text>
                </Box>
            </Stack>
      </Box>
    </Box>
  );
};

export default Experience;
