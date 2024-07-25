import React from 'react';
import { Box, Flex, Spacer, Heading, Text, Grid, GridItem} from '@chakra-ui/react';

import { Link as ScrollLink } from 'react-scroll';

const scrollLinkDuration = 500;

const Header: React.FC = () => {
  return (
    <Box boxShadow='lg'  borderRadius='md' p={2}>
      {/* <Flex minWidth='max-content'>
        <Box>
          <Heading as="h1" mb={4}>Warren</Heading>
        </Box>
        <Spacer />
        <Box>
        <nav>
        <ScrollLink to="home" smooth duration={scrollLinkDuration}>Home</ScrollLink> | 
        <ScrollLink to="about" smooth duration={scrollLinkDuration}>About</ScrollLink> | 
        <ScrollLink to="experience" smooth duration={scrollLinkDuration}>Experience</ScrollLink> | 
        <ScrollLink to="projects" smooth duration={scrollLinkDuration}>Projects</ScrollLink> | 
        <ScrollLink to="contact" smooth duration={scrollLinkDuration}>Contact</ScrollLink>
        </nav>
        </Box>
      </Flex> */}
      {<Flex alignItems='center' gap='2'>
    <Box p='2'>
      <Heading color="#4709cd" as="h1">Warren Sucklal</Heading>
    </Box>
    <Spacer />
      <nav >
        <ScrollLink to="home" smooth duration={scrollLinkDuration}>Home</ScrollLink> | 
        <ScrollLink to="about" smooth duration={scrollLinkDuration}>About</ScrollLink> | 
        <ScrollLink to="experience" smooth duration={scrollLinkDuration}>Experience</ScrollLink> | 
        <ScrollLink to="projects" smooth duration={scrollLinkDuration}>Projects</ScrollLink> | 
        <ScrollLink to="contact" smooth duration={scrollLinkDuration}>Contact</ScrollLink>
      </nav>
  </Flex>}
  </Box>
  );
};

export default Header;
