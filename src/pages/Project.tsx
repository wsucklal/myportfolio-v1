// src/sections/Projects.tsx
import React from 'react';
import { Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
//import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: 'Project One', description: 'Description one', imageUrl: 'https://via.placeholder.com/150' },
  { title: 'Project Two', description: 'Description two', imageUrl: 'https://via.placeholder.com/150' },
];

const Projects: React.FC = () => {
  return (
    <Box id="projects" minH="100vh" p={8} rounded='md' boxShadow='md'  borderTopColor="#4709cd" borderTopWidth="4px">
      <Heading color="#4709cd">Projects</Heading>
      <Divider mt={4} bg='#9F7AEA'/>
      {/* <SimpleGrid columns={[1, null, 2]} spacing="40px" mt={4}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid> */}
    </Box>
  );
};

export default Projects;
