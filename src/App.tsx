import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  GridItem
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

import { Link as ScrollLink } from 'react-scroll';

import Header from "./pages/Header";
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from "./pages/Footer";
import MainLayout from './components/MainLayout';

import SlideFadeSection from "./components/SlideFadeSection";
import FadeSection from "./components/FadeSection";

// const scrollLinkDuration = 500;
const fadeSectionDelay = 300;
const slideFadeSectionDelay = 500;

export const App = () => (
  
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <FadeSection delay={fadeSectionDelay}>
            <Header/>
          </FadeSection>
        {/* <Box>
          <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem>
              <Heading as="h1" mb={4}>Warren</Heading>
            </GridItem>
            <GridItem>
              <nav>
              <ScrollLink to="home" smooth duration={scrollLinkDuration}>Home</ScrollLink> | 
              <ScrollLink to="about" smooth duration={scrollLinkDuration}>About</ScrollLink> | 
              <ScrollLink to="experience" smooth duration={scrollLinkDuration}>Experience</ScrollLink> | 
              <ScrollLink to="projects" smooth duration={scrollLinkDuration}>Projects</ScrollLink> | 
              <ScrollLink to="contact" smooth duration={scrollLinkDuration}>Contact</ScrollLink>
              </nav>
            </GridItem>
          </Grid>
        </Box> */}
        {/* <Header></Header> */}
        <MainLayout>
          <SlideFadeSection delay={slideFadeSectionDelay}>
            <Home />
          </SlideFadeSection>
          <SlideFadeSection delay={slideFadeSectionDelay}>
            <About />
          </SlideFadeSection>
          <SlideFadeSection delay={slideFadeSectionDelay}>
            <Experience />
          </SlideFadeSection>
          <SlideFadeSection delay={slideFadeSectionDelay}>
            <Project />
          </SlideFadeSection>
          <SlideFadeSection delay={slideFadeSectionDelay}>
            <Contact />
          </SlideFadeSection>
          <Footer />
        </MainLayout>
      </Grid>
    </Box>
  </ChakraProvider>
)
