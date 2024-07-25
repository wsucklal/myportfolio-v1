// src/sections/Contact.tsx
import React from 'react';
import { Icon, Box, Heading, LinkBox, Text, Flex, Stack, HStack, Link, Card, CardHeader, Divider, LinkOverlay, SimpleGrid, CardBody, AbsoluteCenter} from '@chakra-ui/react';

import {SocialIcon} from 'react-social-icons'

import EmailForm from '../components/EmailFormComponent';
import SlideFadeSection from '../components/SlideFadeSection';
import LinkBoxCard from '../components/LinkBoxCard';

const Contact: React.FC = () => {
  return (
    <Box as="article"id="contact" minH="100vh" p={8} className='contact' rounded='md' boxShadow='md' borderRadius='md' borderTopColor="#4709cd" borderTopWidth="4px">
      <Heading color="#4709cd">Contacts</Heading>
      <Divider mt={4} bg='#9F7AEA'/>
      <Box position='relative' padding='10'>
      </Box>
      <Box as="section">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <SlideFadeSection delay={600}>
          <Stack spacing={4}>
            <LinkBoxCard linkOverlay='mailto:warrensucklal@gmail.com'>
            <CardHeader>
                    <Flex>
                      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                      <SocialIcon url="mailto:warrensucklal@gmail.com"/>
                        <Box>
                          <Heading size='md'>Email</Heading>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardHeader>
                  {/* <CardBody>
                    <Text>Reach out to me via email for collaborations or inquiries at: <Link><strong>warrensucklal@gmail.com</strong></Link></Text>
                  </CardBody> */}
                  <CardBody>
                    <Text>
                    Reach out to me via email for collaborations or inquiries at: warrensucklal@gmail.com                    </Text>
                  </CardBody>
            </LinkBoxCard>
            <LinkBoxCard linkOverlay='https://www.linkedin.com/in/warren-sucklal'>
            <CardHeader>
                    <Flex>
                      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <SocialIcon network="linkedin"/>

                        <Box>
                          <Heading size='md'>LinkedIn</Heading>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                    Connect with me on LinkedIn to explore my professional journey and latest projects.
                    </Text>
                  </CardBody>
            </LinkBoxCard>
            <LinkBoxCard linkOverlay='https://github.com/wsucklal'>
            <CardHeader>
                    <Flex>
                      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <SocialIcon network="github"/>

                        <Box>
                          <Heading size='md'>Github</Heading>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                    Check out my GitHub to see my latest code and collaborative projects.
                    </Text>
                  </CardBody>
            </LinkBoxCard>
          </Stack>
        </SlideFadeSection>
        <SlideFadeSection delay={600}>
          <Card variant="elevated">
              <CardHeader>
                <Heading size='md'>Email</Heading>
              </CardHeader>
              <Divider borderColor='gray.200' />
            <Text>Want to connect? send me an email down below!</Text>
            <EmailForm/>
            </Card>
        </SlideFadeSection>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
